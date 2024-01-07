import React, { useEffect, useMemo } from "react";
const DailyRort = ({ data }) => {
  const processData = useMemo(() => {
    return data?.map(e => {
      if (e?.item?.image?.data) {
        const base64Data = btoa(String.fromCharCode.apply(null, new Uint8Array(e?.item?.image?.data)));
        e.item.image = base64Data;
      }
      return e;
    });
  }, [data]);


    return (
      <div className="flex flex-col gap-2 bg-transparent">
        {processData?.map((e, i) => (
          <div className="flex justify-between text-white" key={i}>
            <div className="relative">
              <img loading="lazy" src={e?.item?.image && `data:image/png;base64,${e?.item?.image}`} alt="" className="w-14 h-14 rounded-full backi pr-4 object-cover" />
              <p className="absolute inset-0 left-12 bottom-5 text-[10px]">{e?.select}</p>
            </div>
            <div className="flex flex-col items-start">
              <h2 className="text-black text-2xl font-bold font-dancing">{e?.item?.name}</h2>
              <p className="font-serif text-[12px] text-center">{e?.about} <br />
                {e?.mobile}
              </p>
            </div>
            <div className="flex flex-col items-center">
              <p>Rs.{e?.sellPrice}</p>
              <p className="text-[8px]">QTY.{e?.Qty}</p>
            </div>
          </div>
        ))}

      </div>
    );
  };

  export default DailyRort;
