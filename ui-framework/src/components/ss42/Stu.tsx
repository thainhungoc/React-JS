import { useState } from 'react';
import { data as initData } from './data';
import React from 'react';

type Action = "ADD" | "EDIT" | "DELETE" | "BLOCK" | "";

type Student = {
    id: number,
    name: string,
    dateOfbirth: string,
    email: string,
    address: string,
    status: boolean,
}

const initState: Student = {
    id: 0,
    name: "",
    dateOfbirth: "",
    email: "",
    address: "",
    status: true,
}

const StuM = () => {
    const [data, setData] = useState<Student[]>(initData);
    const [action, setAction] = useState<Action>("");
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState<Student>(initState);

    const handleOpenModal = (action: Action) => {
        setAction(action);
        setIsOpen(true);
    };

    const handleCloseModal = () => {
        setAction("");
        setIsOpen(false);
    };

    const handleDelete = () => {
        const newData = data.filter(stu => stu.id !== selected.id);
        setData(newData);
        handleCloseModal();
    };

    const handleBlock = () => {
        const newData = data.map(stu => {
            if (stu.id === selected.id) {
                return { ...stu, status: !stu.status };
            }
            return stu;
        });
        setData(newData);
        handleCloseModal();
    };

    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setSelected(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (action === "ADD") {
            const newStudent: Student = {
                ...selected,
                id: data[data.length - 1]?.id + 1 || 1,
                status: true
            };
            setData(prevData => [...prevData, newStudent]);
        } else if (action === "EDIT") {
            const newData = data.map(stu => {
                if (stu.id === selected.id) {
                    return selected;
                }
                return stu;
            });
            setData(newData);
        }
        handleCloseModal();
    };

    return (
        <>
            <div>
                <div className="w-[80%] m-auto mt-4 h-[100vh]">
                    <main className="main">
                        <header className="d-flex justify-content-between mb-3">
                            {/* <h3>Nhân viên</h3> */}
                            <button className="btn btn-primary" onClick={() => handleOpenModal("ADD")}>Thêm mới nhân viên</button>
                        </header>
                        <div className="d-flex align-items-center justify-content-end gap-2 mb-3">
                            <input style={{ width: 350 }} type="text" className="form-control" placeholder="Tìm kiếm theo email" />
                            <i className="fa-solid fa-arrows-rotate" title="Refresh" />
                        </div>
                        <table className="table table-bordered table-hover table-striped">
                            <thead>
                                <tr>
                                    <th>STT</th>
                                    <th>Họ và tên</th>
                                    <th>Ngày sinh</th>
                                    <th>Email</th>
                                    <th>Địa chỉ</th>
                                    <th>Trạng thái</th>
                                    <th colSpan={3}>Chức năng</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((student, index) => (
                                    <tr key={student.id}>
                                        <td>{index + 1}</td>
                                        <td>{student.name}</td>
                                        <td>{student.dateOfbirth}</td>
                                        <td>{student.email}</td>
                                        <td>{student.address}</td>
                                        <td>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                                                <div className={`status status-${student.status ? 'active' : 'stop'}`} />
                                                <span>{student.status ? "Đang hoạt động" : "Ngừng hoạt động"}</span>
                                            </div>
                                        </td>
                                        <td>
                                            <span className={`button button-${student.status ? "block" : "unblock"}`} onClick={() => {
                                                handleOpenModal("BLOCK");
                                                setSelected(student);
                                            }}>{student.status ? "Chặn" : "Mở Chặn"}</span>
                                        </td>
                                        <td>
                                            <span className="button button-edit" onClick={() => {
                                                handleOpenModal("EDIT");
                                                setSelected(student);
                                            }}>Sửa</span>
                                        </td>
                                        <td>
                                            <span className="button button-delete" onClick={() => {
                                                handleOpenModal("DELETE");
                                                setSelected(student);
                                            }}>Xóa</span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <footer className="d-flex justify-content-end align-items-center gap-3">
                            <select className="form-select" defaultValue={20}>
                                <option value={10}>Hiển thị 10 bản ghi trên trang</option>
                                <option value={20}>Hiển thị 20 bản ghi trên trang</option>
                                <option value={50}>Hiển thị 50 bản ghi trên trang</option>
                                <option value={100}>Hiển thị 100 bản ghi trên trang</option>
                            </select>
                            <ul className="pagination">
                                <li className="page-item">
                                    <a className="page-link" href="#">Previous</a>
                                </li>
                                <li className="page-item"><a className="page-link" href="#">1</a></li>
                                <li className="page-item"><a className="page-link" href="#">2</a></li>
                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                <li className="page-item"><a className="page-link" href="#">Next</a></li>
                            </ul>
                        </footer>
                    </main>
                </div>

                {/* Form thêm mới/ chỉnh sửa nhân viên */}
                <div className="overlay" hidden={!((action === "EDIT" || action === "ADD") && isOpen)}>
                    <form className="form" onSubmit={handleSubmitForm}>
                        <div className="d-flex justify-content-between align-items-center">
                            <h4>{action === "ADD" ? "Thêm mới" : "Chỉnh Sửa"} nhân viên</h4>
                            <i className="fa-solid fa-xmark" onClick={handleCloseModal} />
                        </div>
                        <div>
                            <label className="form-label" htmlFor="userName">Họ và tên</label>
                            <input id="userName" type="text" name='name' value={selected.name} onChange={handleChangeInput} className="form-control" />
                        </div>
                        <div>
                            <label className="form-label" htmlFor="dateOfBirth">Ngày sinh</label>
                            <input id="dateOfBirth" name='dateOfbirth' value={selected.dateOfbirth} onChange={handleChangeInput} type="date" className="form-control" />
                        </div>
                        <div>
                            <label className="form-label" htmlFor="email">Email</label>
                            <input id="email" name='email' value={selected.email} onChange={handleChangeInput} type="text" className="form-control" />
                        </div>
                        <div>
                            <label className="form-label" htmlFor="address">Địa chỉ</label>
                            <textarea className="form-control" name='address' value={selected.address} onChange={handleChangeInput} id="address" rows={3} />
                        </div>
                        <div>
                            <button type='submit' className="w-100 btn btn-primary">{action === "ADD" ? "Thêm mới" : "Cập nhật"}</button>
                        </div>
                    </form>
                </div>

                   {/* Modal xác nhận chặn tài khoản */}
                   <div className="overlay" hidden={!(action == "BLOCK" && isOpen)}>
                    <div className="modal-custom">
                        <div className="modal-title">
                            <h4>Cảnh báo</h4>
                            <i className="fa-solid fa-xmark" onClick={handleCloseModal} />
                        </div>
                        <div className="modal-body-custom">
                            <span>{`Bạn có chắc chắn muốn ${selected.status?"chặn":"mở chặn"} tài khoản này?`}</span>
                        </div>
                        <div className="modal-footer-custom">
                            <button className="btn btn-light" onClick={handleCloseModal}>Hủy</button>
                            <button className="btn btn-danger" onClick={handleBlock}>Xác nhận</button>
                        </div>
                    </div>
                </div>
                {/* Modal xác nhận xóa tài khoản */}
                <div className="overlay" hidden={!(action == "DELETE" && isOpen)}>
                    <div className="modal-custom">
                        <div className="modal-title">
                            <h4>Cảnh báo</h4>
                            <i className="fa-solid fa-xmark" onClick={handleCloseModal} />
                        </div>
                        <div className="modal-body-custom">
                            <span>Bạn có chắc chắn muốn xóa tài khoản này?</span>
                        </div>
                        <div className="modal-footer-custom">
                            <button className="btn btn-light" onClick={handleCloseModal}>Hủy</button>
                            <button className="btn btn-danger" onClick={handleDelete}>Xác nhận</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StuM
