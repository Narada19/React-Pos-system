import React, {useEffect, useState} from 'react'
// import {Link, Route, useHistory} from 'react-router-dom';
import axios from 'axios';
import Sidebar from "../../components/sidebar/Sidebar";
import TopNav from "../../components/topnav/TopNav";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import {DataGrid} from "@material-ui/data-grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";



function TabPanel(props) {
    const {children, value, index, ...other} = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
    typography: {
        fontFamily: 'SF-Pro-Text',
    },
});

const Damage = () => {

    const [value, setValue] = React.useState(0);
    const handletab = (event, newValue) => {
        setValue(newValue);
    };

    //new
    const[itemreturn, setReturn] = useState([])
    const[itemdamage, setDamage] = useState([])
    const[status, setstatus] = useState(false)

    useEffect(() => {

        // Update the document title using the browser API
        document.title = `Return & Damage`;
        // axios.get('http://127.0.0.1:8000/api/damage/get/').then((response) => {
        //     setDamage(response.data.data);
        //     console.log(response.data.data)
        // });
        axios.get('http://127.0.0.1:8000/api/return/get/').then((response) => {
            setReturn(response.data.data);
            console.log(response.data.data)
        });

    },[status])
    

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'product_name',
            headerName: 'Product Name',
            width: 200,
        },
        {
            field: 'brand_name',
            headerName: 'Brand Name',
            width: 150,
        },
        {
            field: 'supplier_name',
            headerName: 'Supplier Name',
            width: 250,
        },
        {
            field: 'qty',
            headerName: 'Qty',
            width: 250,
        },
        {
            field: 'date',
            headerName: 'Date',
            width: 250,
        },
        {
            field: 'status',
            headerName: 'Type',
            width: 250,
        },
        {
            field: 'Action',
            headerName: 'action',
            width: 250,
        },
    ];

    return (
        <>
            <Sidebar/>
            <div id="main" className="layout__content">
                <TopNav/>
                <div className="layout__content-main">
                    <div className="row">
                        <div className="col-12">
                            <div className="card__header">
                                <AppBar position="static" style={{
                                    background: `#FFFFFF`,
                                    color:"#001C2D",
                                    borderRadius: "8px"
                                }}>
                                    <Tabs TabIndicatorProps={{
                                        style: {
                                            marginBottom:"5px",
                                            marginLeft:"4px",
                                            backgroundColor: "#001C2D",

                                        }
                                    }} value={value} onChange={handletab}>
                                        <Tab label={<div className="customertab"><i className='bx bxs-duplicate'></i>Product Returns</div>} {...a11yProps(0)} />
                                        <Tab label={<div className="customertab"><i className="bx bxs-note"></i>Return Details</div>} {...a11yProps(1)} />
                                    </Tabs>
                                </AppBar>
                            </div>
                            <br/>
                            <br/>


                            <TabPanel value={value} index={0}>
                                {/*<div className="card full-height">*/}
                                <div className="row">
                                    <div className="col-12">
                                        <div className="card full-height">
                                            <div>
                                                <h2 className="brandtitle">Product Returns</h2>
                                                <form onSubmit="#">
                                                    <div className="row">
                                                        <div className="col-6">
                                                            <div className="rowcustomer">
                                                                <label>Product Brand</label>
                                                                <input type="text" autoFocus placeholder="" value="#"
                                                                       required/>
                                                            </div>
                                                            {/* <div className="rowcustomer">
                                                                <label>Stock</label>
                                                                <select id="department" name="department" required>
                                                                    <option value="Toyota" selected>Toyota</option>
                                                                    <option value="Mazda" selected>Mazda</option>
                                                                    <option value="Honda" selected>Honda</option>
                                                                    <option value="Benz" selected>Benz</option>
                                                                    <option value="Bmw" selected>Bmw</option>
                                                                </select>
                                                            </div> */}
                                                        </div>
                                                        <div className="col-6">
                                                            <div className="rowcustomer">
                                                                <label>Product Spare parts</label>
                                                                <input type="text" autoFocus placeholder="" value="#"
                                                                       required/>
                                                            </div>
                                                        </div>
                                                        <div className="col-6">
                                                            <div className="rowcustomer">
                                                                <label>Return Quantity</label>
                                                                <input type="number" required/>
                                                            </div>
                                                        </div>
                                                        <div className="col-6">
                                                            <div className="rowcustomer">
                                                            <span className="fw-bold">Current&nbsp;Date:&nbsp;<span className="current-date"  required>{new Date().toLocaleDateString()}</span></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/*<div className="rowuser">*/}
                                                    {/*    <label>Device Type</label>*/}
                                                    {/*    <select id="department" name="department" value={deviceTypeId}*/}
                                                    {/*            onChange={(e) => setdeviceTypeId(e.target.value)} required>*/}
                                                    {/*        <option value="" selected></option>*/}
                                                    {/*        {listData4.lists.map((country, key) => (*/}
                                                    {/*            <option key={key} value={country.id}>*/}
                                                    {/*                {country.deviceTypename}*/}
                                                    {/*            </option>*/}
                                                    {/*        ))}*/}
                                                    {/*    </select>*/}
                                                    {/*</div>*/}
                                                    <div id="button" className="rowbrandsbutton">
                                                        <button type="submit" >Submit</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*</div>*/}
                            </TabPanel>
                            <TabPanel value={value} index={1}>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="card full-height">
                                            <div style={{ height: 400, width: '100%'}}>
                                                <DataGrid
                                                    theme={useStyles}
                                                    rows={itemreturn}
                                                    columns={columns}
                                                    pageSize={5}
                                                    // checkboxSelection
                                                    disableSelectionOnClick
                                                    // onSelectionModelChange={(e) => {
                                                    //     const selectedIDs = new Set(e.selectionModel);
                                                    //     const selectedRowData = listData1.lists.filter((row) =>
                                                    //         selectedIDs.has(row.id)
                                                    //     );
                                                    //     setemailreceipents(selectedRowData)
                                                    //     console.log("selected rowData:", selectedRowData);
                                                    // }}
                                                    // selectionModel={selectionModel}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </TabPanel>
                           
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Damage