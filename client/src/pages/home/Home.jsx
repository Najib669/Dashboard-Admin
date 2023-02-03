import Chart from "../../components/chart/Chart"
import Featured from "../../components/featured/Featured"
import Navbar from "../../components/navbar/Navbar"
import Sidebar from "../../components/sidebar/Sidebar"
import Widjet from "../../components/widget/Widjet"
import Table from "../../components/table/Table"
import "./home.scss"


const Home = () => {
  return (
    <div className="home">
        <Sidebar></Sidebar>
        <div className="homeContainer">
            <Navbar></Navbar>
            <div className="widjets">
                <Widjet type="user"/>
                <Widjet type="order"/>
                <Widjet type="donation"/>
                <Widjet type="earning"/>
                <Widjet type="balance"/>
            </div>
            <div className="charts">
                <Featured/>
                <Chart/>
            </div>
            <div className="listContainer">

            </div>
        </div>
    </div>
  )
}


export default Home