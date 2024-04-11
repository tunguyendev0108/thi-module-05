import {useEffect, useState} from 'react'
import { deleteProduct, getList } from '../service/productService';
import {Link, useNavigate} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function List(){

    const [list, setList] = useState([])
    const navigate = useNavigate()
    async function getNewList () {
        const data = await getList()
        console.log(data);
        setList(data) 
    }
    useEffect( () => {
        getNewList()
    }, [])
    return (
        <>
            <table className="table table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Tên sản phẩm</th>
                    <th scope="col">Mô tả</th>
                    <th scope="col">Giá</th>
                </tr>
            </thead>
            <tbody>
                {list.map((item, index) => (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item.title}</td>
                        <td>{item.description}</td>
                        <td>{item.price}</td>
                        <td>
                          <span>
                              <button className='btn btn-primary' style={{color:'black'}} onClick={() => {
                                navigate('/edit-product', {state: item})
                              }}>Chỉnh sửa</button>
                              <button className="btn btn-danger" style={{color:'black'}} onClick={() => {
                                  confirmAlert({
                                      title: 'Xác nhận xóa',
                                      message: 'Bạn có chắc chắn muốn xóa?',
                                      buttons: [
                                        {
                                          label: 'Xóa',
                                          onClick: () => {
                                            deleteProduct(item.id)
                                            .then(() => {
                                              getNewList()
                                              navigate('/')
                                              toast.success('OK')
                                            })
                                          }
                                        },
                                        {
                                          label: 'Hủy',
                                          onClick: () => {
                                          
                                          }
                                        }
                                      ]
                                    });
                              }}>Xoá</button>
                          </span>
                        </td>
                    </tr>
                ))} 
            </tbody>
            </table>
        </>
    );
}
export default List;