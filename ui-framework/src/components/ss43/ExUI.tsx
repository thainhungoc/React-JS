// // import "./App.css"
// import React from "react";
// import { useState } from 'react';
// import "./Color.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap-icons/font/bootstrap-icons.css";
// import{data as initState} from "./data"
// import { DataGrid, GridColDef } from "@mui/x-data-grid";
// import {
//   Row,
//   Col,
//   ListGroup,
//   Navbar,
//   Form,
//   InputGroup,
//   Button,
// } from "react-bootstrap";
// // import { columns, rows } from "./data";

// // type Action = "ADD" | "EDIT" | "DELETE" | "BLOCK" | "";
// // type Person = {
// //   id: number;
// //   date:string;
// //   customer:string;
// //   pay: string;
// //   paid:string,
// //   due:boolean,
// // };
// // const initState:Person = {
// //     id: 0,
// //     date: "",
// //     customer:"",
// //     pay:"", 
// //     paid:"",
// //     due: true
// // }
// const ExUI = ()=> {
//     const [data, setData] = useState<Person>(initState);
//     const [action, setAction] = useState("")
//     const [open, setOpen] = useState(false)
//     const [selected, setSelected] = useState<Person>(initState);


//     const handleOpenModal = (action: Action) => {
//       setAction(action);
//       setIsOpen(true);
//   };

//   // const handleCloseModal = () => {
//   //     setAction("");
//   //     setIsOpen(false);
//   // };

//   // const handleDelete = () => {
//   //     const newData = data.filter(stu => stu.id !== selected.id);
//   //     setData(newData);
//   //     handleCloseModal();
//   // };

//   // const handleBlock = () => {
//   //     const newData = data.map(stu => {
//   //         if (stu.id === selected.id) {
//   //             return { ...stu, status: !stu.status };
//   //         }
//   //         return stu;
//   //     });
//   //     setData(newData);
//   //     handleCloseModal();
//   // };

//   // const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//   //     const { name, value } = e.target;
//   //     setSelected(prev => ({ ...prev, [name]: value }));
//   // };

//   // const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
//   //     e.preventDefault();
//   //     if (action === "ADD") {
//   //         const newStudent: Student = {
//   //             ...selected,
//   //             id: data[data.length - 1]?.id + 1 || 1,
//   //             status: true
//   //         };
//   //         setData(prevData => [...prevData, newStudent]);
//   //     } else if (action === "EDIT") {
//   //         const newData = data.map(stu => {
//   //             if (stu.id === selected.id) {
//   //                 return selected;
//   //             }
//   //             return stu;
//   //         });
//   //         setData(newData);
//   //     }
//   //     handleCloseModal();
//   };
//   return (
//     <div>
//       <div className="component">
//         <Row>
//           <div className="left">
//             <Col>
//               <h3 className="fs-1 text-primary">Sales.</h3>
//               <ListGroup>
//                 <ListGroup.Item>
//                   <i className="bi bi-circle-square"> Dashboard </i>
//                 </ListGroup.Item>
//                 <ListGroup.Item>
//                   <i className="bi bi-calendar-check"> Lap Test </i>
//                 </ListGroup.Item>
//                 <ListGroup.Item>
//                   <i className="bi bi-calendar4-week"> Appointment </i>
//                 </ListGroup.Item>
//                 <ListGroup.Item>
//                   <i className="bi bi-handbag"> Medicine Order </i>
//                 </ListGroup.Item>
//                 <ListGroup.Item>
//                   <i className="bi bi-envelope-at-fill"> Message</i>
//                 </ListGroup.Item>
//                 <ListGroup.Item>
//                   <i className="bi bi-wallet2"> Payment </i>
//                 </ListGroup.Item>
//                 <ListGroup.Item>
//                   <i className="bi bi-gear"> Setting </i>
//                 </ListGroup.Item>
//               </ListGroup>
//             </Col>
//           </div>

//           <div className="right">
//             <Col>
//               <Navbar className="bg-body-tertiary justify-content-between">
//                 <Form>
//                   <Row>
//                     <Col xs="auto">
//                       <Form.Control
//                         type="text"
//                         placeholder="Search"
//                         className=" mr-sm-2"
//                       />
//                     </Col>
//                     <Col xs="auto">
//                       <Button type="submit">Submit</Button>
//                     </Col>
//                     <h2>Sales Information</h2>
//                     <div className="info">
//                       <div>
//                         <Form.Label htmlFor="custom"> Customer </Form.Label>
//                         <Form.Control type="text" id="custom" />
//                       </div>
//                       <div>
//                         <Form.Label htmlFor="id">Invoice ID</Form.Label>
//                         <Form.Control type="list-number" id="id" />
//                       </div>
//                       <div>
//                         <Form.Label htmlFor="start">Start Date</Form.Label>
//                         <Form.Control type="date" id="start" />
//                       </div>
//                       <div>
//                         <Form.Label htmlFor="end">End Date</Form.Label>
//                         <Form.Control type="date" id="end" />
//                       </div>
//                     </div>
//                     <div className="list">
//                       <div style={{ height: 400, width: "100%" }}>
//                         <DataGrid
//                           rows={rows}
//                           columns={columns}
//                           initialState={{
//                             pagination: {
//                               paginationModel: { page: 0, pageSize: 5 },
//                             },
//                           }}
//                           pageSizeOptions={[5, 10]}
//                           checkboxSelection
//                         />
//                          {/* <Row>
//                             <Col>ID</Col>
//                             <Col>Date</Col>
//                             <Col>Customer</Col>
//                             <Col>Payable Amount</Col>
//                             <Col>Paid Amount</Col>
//                             <Col>Due</Col>
//                             <Col colSpan={3}>Chuc nang</Col>
//                         </Row> */}
//                       </div>
                      
                      
//                        <div className="w-[80%] m-auto mt-4 h-[100vh]">
//                     <main className="main">
//                         <header className="d-flex justify-content-between mb-3">
//                             {/* <h3>Nhân viên</h3> */}
//                             <button className="btn btn-primary" onClick={() => handleOpenModal("ADD")}>Thêm mới nhân viên</button>
//                         </header>
//                         <div className="d-flex align-items-center justify-content-end gap-2 mb-3">
//                             <input style={{ width: 350 }} type="text" className="form-control" placeholder="Tìm kiếm theo email" />
//                             <i className="fa-solid fa-arrows-rotate" title="Refresh" />
//                         </div>
//                         <table className="table table-bordered table-hover table-striped">
//                             <thead>
//                                 <tr>
//                                     <th>STT</th>
//                                     <th>ID </th>
//                                     <th>Date</th>
//                                     <th>customer</th>
//                                     <th>Pay</th>
//                                     <th>paid</th>
//                                     <th>due</th>
//                                     <th colSpan={3}>Chức năng</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 {data.map((person, index) => (
//                                     <tr key={person.id}>
//                                         <td>{index + 1}</td>
//                                         <td>{person.date}</td>
//                                         <td>{person.customer}</td>
//                                         <td>{person.pay}</td>
//                                         <td>{person.paid}</td>
//                                         <td>{person.due}</td>
//                                         <td>
//                                             <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
//                                                 <div className={`status status-${person.due ? 'active' : 'stop'}`} />
//                                                 <span>{person.due ? "Đang hoạt động" : "Ngừng hoạt động"}</span>
//                                             </div>
//                                         </td>
//                                         <td>
//                                             <span className={`button button-${person.due ? "block" : "unblock"}`} onClick={() => {
//                                                 handleOpenModal("BLOCK");
//                                                 setSelected(person);
//                                             }}>{person.due ? "Chặn" : "Mở Chặn"}</span>
//                                         </td>
//                                         <td>
//                                             <span className="button button-edit" onClick={() => {
//                                                 handleOpenModal("EDIT");
//                                                 setSelected(person);
//                                             }}>Sửa</span>
//                                         </td>
//                                         <td>
//                                             <span className="button button-delete" onClick={() => {
//                                                 handleOpenModal("DELETE");
//                                                 setSelected(person);
//                                             }}>Xóa</span>
//                                         </td>
//                                     </tr>
//                                 ))}
//                             </tbody>
//                         </table>
//                     </div>
//                   </Row>
//                 </Form>
//               </Navbar>
//             </Col>
//           </div>
//         </Row>
//          {/* Form thêm mới/ chỉnh sửa nhân viên */}
//          <div className="overlay" hidden={!((action === "EDIT" || action === "ADD") && open)}>
//                     <form className="form" onSubmit={handleSubmitForm}>
//                         <div className="d-flex justify-content-between align-items-center">
//                             <h4>{action === "ADD" ? "Thêm mới" : "Chỉnh Sửa"} nhân viên</h4>
//                             <i className="fa-solid fa-xmark" onClick={handleCloseModal} />
//                         </div>
//                         <div>
//                             <label className="form-label" htmlFor="userName">ID</label>
//                             <input id="userName" type="text" name='name' value={selected.id} onChange={handleChangeInput} className="form-control" />
//                         </div>
//                         <div>
//                             <label className="form-label" htmlFor="dateOfBirth"></label>
//                             <input id="dateOfBirth" name='dateOfbirth' value={selected.date} onChange={handleChangeInput} type="date" className="form-control" />
//                         </div>
//                         <div>
//                             <label className="form-label" htmlFor="email">customer</label>
//                             <input id="email" name='email' value={selected.customer} onChange={handleChangeInput} type="text" className="form-control" />
//                         </div>
//                         <div>
//                             <label className="form-label" htmlFor="address">pay</label>
//                             <textarea className="form-control" name='address' value={selected.pay} onChange={handleChangeInput} id="address" rows={3} />
//                         </div>
//                         <div>
//                             <button type='submit' className="w-100 btn btn-primary">{action === "ADD" ? "Thêm mới" : "Cập nhật"}</button>
//                         </div>
//                     </form>
//                 </div>

//                    {/* Modal xác nhận chặn tài khoản */}
//                    <div className="overlay" hidden={!(action == "BLOCK" && open)}>
//                     <div className="modal-custom">
//                         <div className="modal-title">
//                             <h4>Cảnh báo</h4>
//                             <i className="fa-solid fa-xmark" onClick={handleCloseModal} />
//                         </div>
//                         <div className="modal-body-custom">
//                             <span>{`Bạn có chắc chắn muốn ${selected.due?"chặn":"mở chặn"} tài khoản này?`}</span>
//                         </div>
//                         <div className="modal-footer-custom">
//                             <button className="btn btn-light" onClick={handleCloseModal}>Hủy</button>
//                             <button className="btn btn-danger" onClick={handleBlock}>Xác nhận</button>
//                         </div>
//                     </div>
//                 </div>
//                 {/* Modal xác nhận xóa tài khoản */}
//                 <div className="overlay" hidden={!(action == "DELETE" && open)}>
//                     <div className="modal-custom">
//                         <div className="modal-title">
//                             <h4>Cảnh báo</h4>
//                             <i className="fa-solid fa-xmark" onClick={handleCloseModal} />
//                         </div>
//                         <div className="modal-body-custom">
//                             <span>Bạn có chắc chắn muốn xóa tài khoản này?</span>
//                         </div>
//                         <div className="modal-footer-custom">
//                             <button className="btn btn-light" onClick={handleCloseModal}>Hủy</button>
//                             <button className="btn btn-danger" onClick={handleDelete}>Xác nhận</button>
//                         </div>
//                     </div>
//                 </div>
//       </div>
//     </div>
//   );
// }
// export default ExUI;
