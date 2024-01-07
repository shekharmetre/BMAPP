import React, { useEffect, useState, Suspense } from "react";
import { FaPrint, FaPlusCircle, FaCut } from "react-icons/fa";
const Inventories = React.lazy(() => import("../components/Inventories"))
import Api from "../../utils/Api";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Inventory = () => {
  const [check, setcheck] = useState(false);
  const [ind, setind] = useState(null);
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [about, setAbout] = useState("");
  const [MRP, setMRP] = useState(0);
  const [stock, setStock] = useState(0);
  const [image, setImage] = useState();
  const [brand, setBrand] = useState("");
  const user = useSelector(state => state?.user?.auth)
  const navigate = useNavigate();
  const email = user?.email
  if (!email) {
    navigate('/login')
  }

  useEffect(() => {
    const fetchingalllinveentory = async () => {
        try {
          const response = await Api.get(`/api/fetch/${user && user?.email}`);
          const response_data = response?.data
          const converted_toImage = response_data.map(e => {
            if (e?.image?.data) {
              const base64Data = btoa(String.fromCharCode.apply(null, new Uint8Array(e.image.data)));
              e.image = base64Data;
            }
            return e;
          });
          setData(converted_toImage)
        } catch (error) {
          console.log(error);
        }
    };
    fetchingalllinveentory();
  },[]);

  console.log(data)





  const SaveInventory = async (e) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("file", image); // Assuming 'image' is your file
    formdata.append("name", name); // Add other form data fields
    formdata.append("stock", stock);
    formdata.append("mrp", MRP);
    formdata.append("brand", brand);
    formdata.append("attribute", description);
    formdata.append('email', email)
    try {
      const response = await Api.post("/api/addinventory", formdata);
      setData([...data, response?.data]);
      setImage(null);
      setStock(0);
      setMRP(0);
      setDescription("");
      setBrand("");
      setName("");
    } catch (error) {
      console.error("Error creating new inventory:", error);
    }
  };



  return (
    <div className="p-2">
      <div className="flex justify-between items-center">
        <h3 className="font-dancing text-2xl text-black">Product Inventory </h3>
        <div className="form-control">
          <label className="cursor-pointer label">
            <input
              type="checkbox"
              className="toggle toggle-primary"
              checked={check}
              onChange={() => setcheck((prev) => !prev)}
            />
          </label>
        </div>
      </div>
      <div className="flex justify-between items-center text-black">
        <ul className="flex items-center gap-2">
          <li className="">Total : {data.length},</li>
          <li className="">Stock : {data.reduce((total, item) => total + item.stock, 0)},</li>
          <li className="">inv: {data.reduce((total, item) => total + item.mrp, 0)}</li>
          <li className="">
            <FaPrint />
          </li>
        </ul>
        {check ? (
          <>
            <button
              className="btn"
              onClick={() => document.getElementById("my_modal_1").showModal()}
            >
              <FaPlusCircle />
            </button>
            <dialog id="my_modal_1" className="modal">
              <div className="modal-box">
                <div className="flex justify-between items-center">
                  <h3 className="font-bold text-lg">Add Inventory</h3>
                  <div className="modal-action">
                    <form method="dialog">
                      <button className="btn">
                        <FaCut />
                      </button>
                    </form>
                  </div>
                </div>
                <div>
                  <form className="w-full gap-2 grid grid-cols-2">
                    <div className="flex flex-col">
                      <label htmlFor="form1-input">Name : </label>
                      <input
                        type="text"
                        id="form1-input"
                        name="form1-input"
                        placeholder="Enter item Name"
                        className="bos p-2"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="form1-input">Description : </label>
                      <input
                        type="text"
                        id="form1-input"
                        name="form1-input"
                        placeholder="Enter item Detail"
                        className="bos p-2"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                      />
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="form1-input">Stock :</label>
                      <input
                        type="number"
                        id="form1-input"
                        name="form1-input"
                        placeholder="Enter Stock"
                        className="bos p-2"
                        value={stock}
                        onChange={(e) => setStock(e.target.value)}
                      />
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="form1-input">MRP Rate :</label>
                      <input
                        type="number"
                        id="form1-input"
                        name="form1-input"
                        placeholder="Enter item Name"
                        className="bos p-2"
                        value={MRP}
                        onChange={(e) => setMRP(e.target.value)}
                      />
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="form1-input">Brand :</label>
                      <input
                        type="text"
                        id="form1-input"
                        name="form1-input"
                        placeholder="Enter Stock"
                        className="bos p-2"
                        value={brand}
                        onChange={(e) => setBrand(e.target.value)}
                      />
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="form1-input">image :</label>
                      <input
                        type="file"
                        id="form1-input"
                        name="form1-input"
                        placeholder="Enter item Name"
                        className="bos p-1"
                        onChange={(e) => setImage(e.target.files[0])}
                      />
                    </div>
                    <div className="flex flex-col col-span-2">
                      <label htmlFor="form1-input">About :</label>
                      <input
                        type="text"
                        id="form1-input"
                        name="form1-input"
                        placeholder="Write something about this"
                        className="bos p-2 w-full"
                        value={about}
                        onChange={(e) => setAbout(e.target.value)}
                      />
                    </div>
                  </form>
                  <div className="modal-action">
                    <form method="dialog">
                      <button
                        className="btn btn-primary px-7"
                        onClick={SaveInventory}
                      >
                        Save
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </dialog>
          </>
        ) : (
          <div></div>
        )}
      </div>
      <div className="text-black p-2 h-[500px] overflow-scroll flex flex-col gap-5" style={{ background: "#D9D9D9" }}>
        {data?.length >= 1 ?(
          data?.map((item, index) => (
            <div key={index} onClick={() => setind(index)}>
              <Suspense fallback={<div>Loading....</div>}>
                <Inventories editable={check} item={item} view={ind} indexes={index} />
              </Suspense>
            </div>
          ))
        ):(
          <div>{user?.email} not added any inventory</div>
        )}
      </div>

    </div>
  );
};

export default Inventory;
