import CountChart from "@/components/CountChart"
import UserCard from "@/components/UserCard"

const AdminPage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      {/* LEFT */}
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        {/* USERS CARDS */}
        <div className="flex flex-col lg:flex-row gap-4 justify-between flex-wrap">
          <UserCard type="Student" />
          <UserCard type="Teacher" />
          <UserCard type="Parents" />
          <UserCard type="Staff" />
        </div>
        {/* MIDDLE CHARTS */}
        <div className="flex gap-4 flex-col lg:flex-row">
          {/* COUNT CHART */}
          <div className="w-full lg:w-1/3 h-[450px]">
            <CountChart />
          </div>
        </div>
      </div>

      <div className=""></div>
      {/* BOTTOM CHATRS */}
      <div className=""></div>


      {/* RIGHT */}
      <div className=" w-full lg:w-2/3">RIGHT </div>

    </div>
  )
}

export default AdminPage