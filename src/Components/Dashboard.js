import React,{useState} from 'react';
import { IoLogoUsd} from 'react-icons/io';
import { FaHotel } from 'react-icons/fa';
import { BsLink } from 'react-icons/bs';
import { AiOutlineTransaction } from 'react-icons/ai';
import Bar from './Charts/Bar';
import PolarArea from './Charts/PolarArea';
import "./Dashboard.css"
import Line from './Charts/Line';


function Dashboard() {
    const [trxType,setTrxType] = useState(true)
    const [reportingCommentsfilter,setReportingCommentsfilter] = useState("All")
    const [data,setData] = useState({
        "All" : {
            yearWiseData : [
                {x : 2018, y : 200115},
                {x : 2019, y : 500115},
                {x : 2020, y : 400115},
                {x : 2021, y : 800115},
            ],
            Region : [
                {x: "APAC", y: 200},
                {x: "BPAC", y: 300},
                {x: "CPAC", y: 50},
            ],
            ReportingComments : [
                {x: "Paid" , y : 5000},
                {x: "Reconciled" , y : 2000},
                {x: "Pending" , y : 10000},
                {x: "In Progress" , y : 3000},
            ],
            totalUsdAmount : {
                x : "USD",
                y: 50000
            },
            hotelCount : {
                x: "Hotels",
                y : 30
            },
            chainRepIndeep : {
                x : "Chain Rep Indeep",
                y : 300
            },
            transactionCount : {
                x : "Transaction Count",
                y : 50
            }
        },
        "Collected" : {
            yearWiseData : [
                {x : 2018, y : 215},
                {x : 2019, y : 115},
                {x : 2020, y : 4015},
                {x : 2021, y : 8001},
            ],
            Region : [
                {x: "APAC", y:10},
                {x: "BPAC", y: 400},
                {x: "CPAC", y: 500},
            ],
            ReportingComments : [
                {x: "Paid" , y : 7000},
                {x: "Reconciled" , y : 700},
                {x: "Pending" , y : 100},
                {x: "In Progress" , y : 9000},
            ],
            totalUsdAmount : {
                x : "USD",
                y: 4000
            },
            hotelCount : {
                x: "Hotels",
                y : 50
            },
            chainRepIndeep : {
                x : "Chain Rep Indeep",
                y : 700
            },
            transactionCount : {
                x : "Transaction Count",
                y : 500
            }
        },
        "Reconciled" : {
            yearWiseData : [
                {x : 2018, y : 30115},
                {x : 2019, y : 60115},
                {x : 2020, y : 10115},
                {x : 2021, y : 780115},
            ],
            Region : [
                {x: "APAC", y: 10},
                {x: "BPAC", y: 60},
                {x: "CPAC", y: 50},
            ],
            ReportingComments : [
                {x: "Paid" , y : 10},
                {x: "Reconciled" , y : 50},
                {x: "Pending" , y : 30},
                {x: "In Progress" , y : 90},
            ],
            totalUsdAmount : {
                x : "USD",
                y: 8000000
            },
            hotelCount : {
                x: "Hotels",
                y : 80
            },
            chainRepIndeep : {
                x : "Chain Rep Indeep",
                y : 900
            },
            transactionCount : {
                x : "Transaction Count",
                y : 1090
            }
        },
        "Open" : {
            yearWiseData : [
                {x : 2018, y : 25},
                {x : 2019, y : 515},
                {x : 2020, y : 40},
                {x : 2021, y : 801},
            ],
            Region : [
                {x: "APAC", y: 900},
                {x: "BPAC", y: 5000},
                {x: "CPAC", y: 300},
            ],
            ReportingComments : [
                {x: "Paid" , y : 5000},
                {x: "Reconciled" , y : 2000},
                {x: "Pending" , y : 10000},
                {x: "In Progress" , y : 3000},
            ],
            totalUsdAmount : {
                x : "USD",
                y: 90000000
            },
            hotelCount : {
                x: "Hotels",
                y : 30
            },
            chainRepIndeep : {
                x : "Chain Rep Indeep",
                y : 300
            },
            transactionCount : {
                x : "Transaction Count",
                y : 50
            }
        },
        "AmountCollected" : {
            x : "6950000",
            y : "Amount Collected"
        },
        "InvoicedAmount" : {
            x : "6950000",
            y : "Invoiced Amount"
        },
        "DemotedValue" : {
            x : "6950000",
            y : "Demoted Value"
        },
    })

    // const [cardsData,setCardsData] = useState([

    // ])
  return (
    <div className='dashboardContainer'>
        <div className='dashboardHeadingContainer'>
            <span className='dashboardHeading'>DASHBOARD</span>
        </div>
        <div className='trxFilter'>
            <span className={trxType ? 'agedFilter activeTrxFilter' : 'agedFilter'} onClick={()=>setTrxType(true)}>AGED </span>
            <span className={trxType ? 'cbrFilter' : 'cbrFilter activeTrxFilter'} onClick={()=>setTrxType(false)}> CBR</span>
        </div>
        <div className='reportingCommentsfilter'>
            <span className={reportingCommentsfilter === "All" ? 'activeTrxFilter' : ''} onClick={()=>setReportingCommentsfilter("All")}>All </span>
            <span className={reportingCommentsfilter ==="Collected" ? 'activeTrxFilter' : ''} onClick={()=>setReportingCommentsfilter("Collected")}> Collected</span>
            <span className={reportingCommentsfilter === "Reconciled" ? 'activeTrxFilter' : ''} onClick={()=>setReportingCommentsfilter("Reconciled")}> Reconciled</span>
            <span className={reportingCommentsfilter === "Open"? 'activeTrxFilter' : ''} onClick={()=>setReportingCommentsfilter("Open")}> Open</span>
        </div>
        <div className='cardsContainer'>
            <span className='dashboardHeading cardContentHeading'>DATA</span>
            <div className='innerCardContainer'>
                <div className='cardsContentContainer'>
                    <span><IoLogoUsd/></span>
                    <span>{data[reportingCommentsfilter].totalUsdAmount.y}</span>
                    <span className='labelContent'>{data[reportingCommentsfilter].totalUsdAmount.x}</span>
                </div>
                <div className='cardsContentContainer'>
                    <span><FaHotel/></span>
                    <span>{data[reportingCommentsfilter].hotelCount.y}</span>
                    <span className='labelContent'>{data[reportingCommentsfilter].hotelCount.x}</span>
                </div>
                <div className='cardsContentContainer'>
                    <span><BsLink/></span>
                    <span>{data[reportingCommentsfilter].chainRepIndeep.y}</span>
                    <span className='labelContent'>{data[reportingCommentsfilter].chainRepIndeep.x}</span>
                </div>
                <div className='cardsContentContainer'>
                    <span><AiOutlineTransaction/></span>
                    <span>{data[reportingCommentsfilter].transactionCount.y}</span>
                    <span className='labelContent'>{data[reportingCommentsfilter].transactionCount.x}</span>
                </div>
            </div>
        </div>
        <div className='ChartsContainer1'>
            <div>
                <Bar data={data[reportingCommentsfilter].ReportingComments} size={{height : 255, width : 650}}/>
            </div>
            <div>
                <PolarArea data={data[reportingCommentsfilter].yearWiseData} size={{height : 300, width : 400}}/>
            </div>
        </div>
        <div className='ChartsContainer2'>
            <div className='chart2CardsContainer'>
                <div className='chart2ContentContainer' id='chart2ContentContainer1'>
                    <span className='chart2Amount'>{data.AmountCollected.x}</span>
                    <span className='chart2Label'>{data.AmountCollected.y}</span>
                </div>
                <div id='chart2ContentContainer2' className='chart2ContentContainer'>
                    <div >
                        <span className='chart2Amount'>{data.InvoicedAmount.x}</span>
                        <span className='chart2Label'>{data.InvoicedAmount.y}</span>
                    </div>
                    <div >
                        <span className='chart2Amount'>{data.DemotedValue.x}</span>
                        <span className='chart2Label'>{data.DemotedValue.y}</span>
                    </div>
                </div>
            </div>
            <div>
                <Line data={data[reportingCommentsfilter].Region} size={{height : 300, width : 650}}/>
            </div>
        </div>
    </div>
  )
}

export default Dashboard