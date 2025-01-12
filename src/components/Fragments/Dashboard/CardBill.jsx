import { useState, useEffect } from "react";
import Card from "../../Elements/Card";

const CardBill = () => {
  const [loading, setLoading] = useState(true);
  const [billData, setBillData] = useState([]);

  useEffect(() => {
    const fetchBills = async () => {
      try {
        const response = await fetch("https://jwt-auth-eight-neon.vercel.app/bills", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("refreshToken")}`,
          },
        });
        const data = await response.json();
        setBillData(data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching bills:", error);
        setLoading(false);
      }
    };

    fetchBills();
  }, []);

  const billCard = Array.isArray(billData)
    ? billData.map((bill) => (
        <div key={bill.id} className="lg:flex justify-between pt-3 pb-3">
          <div className="flex">
            <div className="bg-special-bg me-3 px-4 rounded-lg flex place-content-center flex-col dark:text-gray-600">
              <span className="text-xs">{bill.month}</span>
              <span className="text-2xl font-bold">{bill.date}</span>
            </div>
            <div className="">
              <img className="h-6" src={`/images/${bill.logo}`} alt={`${bill.name} logo`} />
              <span className="font-bold dark:text-gray-600">{bill.name}</span>
              <br />
              <span className="text-xs dark:text-gray-600">Last Charge - {bill.lastCharge}</span>
            </div>
          </div>
          <div className="flex place-content-center flex-col">
            <span className="p-2 border rounded-lg font-bold text-center dark:text-gray-600">${bill.amount}</span>
          </div>
        </div>
      ))
    : null;

  return <Card title="Upcoming Bill" desc={<div className="h-full flex flex-col justify-around">{loading ? <div className="flex justify-center items-center h-full">Loading...</div> : billCard}</div>} />;
};

export default CardBill;

// import bills from "../../../data/bills";
// import Card from "../../Elements/Card";

// const CardBill = () => {
//   const billCard = bills.map((bill) => (
//     <div key={bill.id} className="lg:flex justify-between pt-3 pb-3">
//       <div className="flex">
//         <div className="bg-special-bg me-3 px-4 rounded-lg flex place-content-center flex-col">
//           <span className="text-xs">{bill.month}</span>
//           <span className="text-2xl font-bold">{bill.date}</span>
//         </div>
//         <div className="">
//           <img className="h-6" src={`/images/${bill.logo}`} />
//           <span className="font-bold">{bill.name}</span>
//           <br />
//           <span className="text-xs">Last Charge - {bill.lastCharge}</span>
//         </div>
//       </div>
//       <div className="flex place-content-center flex-col">
//         <span className="p-2 border rounded-lg font-bold text-center">${bill.amount}</span>
//       </div>
//     </div>
//   ));

//   return <Card title="Upcoming Bill" desc={<div className="h-full flex flex-col justify-around">{billCard}</div>} />;
// };

// export default CardBill;
