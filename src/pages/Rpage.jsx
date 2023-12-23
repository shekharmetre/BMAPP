import React, { useMemo, useState, useEffect, useCallback } from "react";
import Report from "./Report";
import { motion } from "framer-motion";
import { AiFillDelete, AiOutlineArrowUp } from "react-icons/ai";
import DailyRort from "../components/DailyRort";
import Api from "../../utils/Api";
import { FaCut } from "react-icons/fa";

const Rpage = () => {
  const [dates, setDates] = useState([]);
  const [today, setDay] = useState([5]);
  const [hidence, setHidence] = useState(true);
  const [selected, setSelected] = useState("sell");
  const [search, setSearch] = useState("");
  const [fetchedItem, setFetchedItem] = useState([]);
  const [selledPrice, setSelledPrice] = useState("6");
  const [items, setItems] = useState();
  const [searchData, setSearchData] = useState([]);
  const [Qty, setQty] = useState();
  const [about, setAbout] = useState("");
  const [number, setNumber] = useState();
  const  [activity,setActivity] = useState([])

  const SearchingItems = (e) => {
    setSearch(e.target.value);
    const filteredValue = searchData?.filter((item) =>
      item?.name?.toLowerCase().includes(search.toLowerCase())
    );
    setFetchedItem(filteredValue);
  };

  useEffect(() => {
    const fetchingalllinveentory = async () => {
      try {
        const response = await Api.get("/api/fetch");
        setSearchData(response?.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchingalllinveentory();
  }, []);

  const Detector = [
    {
      type: "sell",
      userinterfacr: [
        {
          name: "Search Inventory",
          placeholder: "Enter value to search",
        },
        {
          name: "Sell Amount",
          placeholder: "Enter the amount",
        },
        {
          name: "Qty",
          placeholder: "Enter the quantity",
        },
        {
          name: "About",
          placeholder: "Write something....",
        },
      ],
    },
    {
      type: "pending",
      userinterfacr: [
        {
          name: "name of Customer",
          placeholder: "Customer Name",
        },
        {
          name: "search/add",
          placeholder: "Search/write item",
        },
        {
          name: "Price",
          placeholder: "Enter sold Amount",
        },
        {
          name: "Mobile Number",
          placeholder: "Enter Mobile Number",
        },
        {
          name: "About",
          placeholder: "Write something....",
        },
      ],
    },
    {
      type: "repair",
      userinterfacr: [
        {
          name: "repair things",
          placeholder: "Enter repair Item",
        },
        {
          name: "Mobile Name",
          placeholder: "Enter Mobile Name",
        },
        {
          name: "Price",
          placeholder: "Enter Price",
        },
        {
          name: "About",
          placeholder: "Write something....",
        },
      ],
    },
    {
      type: "remember",
      userinterfacr: [
        {
          name: "write remember thing",
          placeholder: "writing.....",
        },
        {
          name: "About",
          placeholder: "write something About",
        },
      ],
    },
  ];

  const SaveActivity = async () => {
    try {
      const response = await Api.post("/activity/add", {
        item: items,
        qty: Qty,
        sellPrice: selledPrice,
        select: selected,
        about: about,
        number: number,
      });
      setActivity([...activity,response?.data])
    } catch (error) {
      console.log(error);
    }
  };

  const DeleteFromItems = (index) => {
    let newArray = [...items.slice(0, index), ...items.slice(index + 1)];
    setItems(newArray);
    console.log(newArray);
  };

  useMemo(async ()=>{
    const date = dates[today - 1]?.date
    const month = dates[today]?.month
    const year = dates[today - 1]?.year
    try {
      const response = await Api.post('/activity/get',{date,month,year})
      setActivity(response?.data)
    } catch (error) {
      console.log(error)
    }
  },[today])

  useEffect(() => {
    const fetchData = async () => {
      const date = dates[today - 1]?.date;
      const month = dates[today]?.month;
      const year = dates[today - 1]?.year;
      try {
        const response = await Api.post('/activity/get', { date, month, year });
        setActivity(response?.data);
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchData();
  }, []);
  const currentDate = new Date();

  useMemo(() => {
    const dayNames = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const newDate = [];
    for (let i = 4; i >= 1; i--) {
      const yesterday = new Date(currentDate.getTime() - 86400000 * i);
      const dates = {
        date: yesterday.getDate(),
        week: dayNames[yesterday.getDay()],
        year: yesterday.getFullYear(),
        month: yesterday.getMonth() + 1,
      };
      newDate.push(dates);
    }
    newDate.push({
      date: currentDate.getDate(),
      week: dayNames[(currentDate.getDay(), 1)],
      year: currentDate.getFullYear(),
      month: currentDate.getMonth() + 1,
    });
    for (let i = 1; i <= 4; i++) {
      const yesterday = new Date(currentDate.getTime() + 86400000 * i);
      const dates = {
        date: yesterday.getDate(),
        week: dayNames[yesterday.getDay()],
        year: yesterday.getFullYear(),
        month: yesterday.getMonth() + 1,
      };
      newDate.push(dates);
      setDates(newDate);
    }
  }, []);

  const DateLogicstics = (index) => {
    setDay(index + 1);
  };

  const findDetectorByType = (type) => {
    return Detector.find((item) => item.type === type) || null;
  };
  const addActivity = useMemo(() => findDetectorByType(selected), [selected]);
  console.log(activity)
  return (
    <div className=" h-screen" style={{ background: "#C887CD" }}>
      <div className={`flex gap-2 overflow-scroll p-2`}>
        {dates.map((item, index) => (
          <motion.div
            key={index}
            onClick={() => DateLogicstics(index)}
            className={`flex flex-col  ${
              today - 1 == index ? "bg-blue-500" : "bg-white"
            }   text-center px-5 p-2 rounded-md shadow-md shadow-black`}
          >
            <p className="text-sm">{item.date}</p>
            <p className="text-sm whitespace-nowrap text-ellipsis overflow-hidden">
              {item.week.slice(0, 3)}
            </p>
          </motion.div>
        ))}
      </div>
      <div className="-z-10">
        <Report />
      </div>
      <div className="mt-3 px-2">
        <div className="flex justify-between items-center mb-5">
          <h3 className="text-white text-3xl">Recent Activity</h3>
          {/* activity models */}

          <>
            <button
              className="btn btn-primary "
              onClick={() => document.getElementById("my_modal_2").showModal()}
            >
              <AiOutlineArrowUp
                fontSize={30}
                color="white"
                className=""
                style={{ transform: "rotate(45deg)" }}
              />
            </button>
            <dialog
              id="my_modal_2"
              className="modal w-full dark:text-white text-black"
            >
              <div
                className="modal-box text-black"
                style={{ background: "#C887CD" }}
              >
                <div className="flex justify-between items-center">
                  <h2>Add Activity</h2>
                  <form method="dialog">
                    <button className="px-7">
                      <FaCut />
                    </button>
                  </form>
                </div>
                {/*  */}
                <div className="flex justify-end mt-5">
                  <select
                    id="yourSelect"
                    className="p-2"
                    onChange={(e) => setSelected(e.target.value)}
                    value={selected}
                  >
                    {Detector.map((e, i) => (
                      <option key={i} value={e.type}>
                        {e.type}
                      </option>
                    ))}
                  </select>
                </div>

                <ul className="w-full relative grid grid-cols-2 mt-20 gap-4 justify-between actvity">
                  {addActivity.userinterfacr[0] && (
                    <>
                      {items && (
                        <div className={`${items ? "" : "hidden"} w-24 absolute items-center bg-white  flex justify-between -top-14 h-10 p-2 rounded-md`}>
                          <p>{items.name}</p>
                          <p>
                            <AiFillDelete />
                          </p>
                        </div>
                      )}
                      <li className={`${addActivity.type === "sell" && "col-span-2"} flex flex-col gap-1`}>
                        <label htmlFor="io2">
                          {addActivity.userinterfacr[0].name}
                        </label>
                        <input
                          type="text"
                          placeholder={`${addActivity.userinterfacr[0].placeholder}`}
                          value={search}
                          onChange={SearchingItems}
                          onInput={()=>setHidence(true)}
                          onMouseLeave={(()=>setHidence(false))}
                        />
                      </li>
                      <div className={` ${hidence ? "":"hidden"} absolute top-20 w-full h-[100px] bg-blue-400 overflow-scroll bg-transparent flex flex-col gap-2`}>
                        {fetchedItem &&
                          fetchedItem.map((i, e) => (
                            <div
                              className="bg-blue-400 p-2 flex justify-between backdrop-blur-md rounded-md"
                              key={e}
                              onClick={() => setItems(i)}
                            >
                              <p className=" whitespace-nowrap text-ellipsis overflow-hidden">
                                {i.name.slice(0, 10)}
                              </p>
                              <p>Rs. {i.mrp}</p>
                            </div>
                          ))}
                      </div>
                    </>
                  )}
                  {addActivity.userinterfacr[1] && (
                    <li className="flex flex-col gap-1">
                      <label htmlFor="io2">
                        {addActivity.userinterfacr[1].name}
                      </label>
                      <input
                        type="text"
                        placeholder={`${addActivity.userinterfacr[1].placeholder}`}
                        value={selledPrice}
                        onChange={(e) => setSelledPrice(e.target.value)}
                      />
                    </li>
                  )}
                  {addActivity.userinterfacr[2] && (
                    <li className="flex flex-col gap-1">
                      <label htmlFor="io2">
                        {addActivity.userinterfacr[2].name}
                      </label>
                      <input
                        type="text"
                        placeholder={`${addActivity.userinterfacr[2].placeholder}`}
                        value={Qty}
                        onChange={(e) => setQty(e.target.value)}
                      />
                    </li>

                  )}
                  {addActivity.userinterfacr[3] && (
                    <li className="flex flex-col gap-1">
                      <label htmlFor="io2">
                        {addActivity.userinterfacr[3].name}
                      </label>
                      <input
                        type="text"
                        placeholder={`${addActivity.userinterfacr[3].placeholder}`}
                        value={about}
                        onChange={(e) => setAbout(e.target.value)}
                      />
                    </li>
                  )}
                  {addActivity.userinterfacr[4] && (
                    <li className="flex flex-col gap-1">
                      <label htmlFor="io2">
                        {addActivity.userinterfacr[4].name}
                      </label>
                      <input
                        type="text"
                        placeholder={`${addActivity.userinterfacr[4].placeholder}`}
                      />
                    </li>
                  )}
                </ul>
                <div className="modal-action">
                  <form method="dialog">
                    <button
                      className="btn btn-primary px-7"
                      onClick={SaveActivity}
                    >
                      Save
                    </button>
                  </form>
                </div>
              </div>
            </dialog>
          </>
        </div>
        <div className="flex flex-col gap-5">
          <DailyRort data={activity} />
        </div>
      </div>
    </div>
  );
};

export default Rpage;
