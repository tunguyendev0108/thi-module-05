import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Form, Formik, Field, ErrorMessage } from 'formik';
import { addProduct } from '../service/productService';
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup'
import './AddProduct.css'
function AddProductPage(){
    const navigate = useNavigate()
    const handleSubmit = (value) => {
        addProduct(value)
        navigate('/')
        toast.success('OK')
    }
    return (
        <>
            <h1>Tạo mới</h1>
            <Formik
            initialValues={{
                title: '',
                description: '',
                price: ''
            }}
            onSubmit={handleSubmit}
            validationSchema={Yup.object({
                title: Yup.string().max(30, 'Không được quá 30 ký tự').required('Không được để trống'),
                description: Yup.string().required('Không được để trống'),
                price: Yup.number('Phải là số').required('Không được để trống')
            })}
            enableReinitialize={true}>
                <Form className="form-group">
                        <label htmlFor="title">Tên sản phẩm: <ErrorMessage component={'span'} className='err' name='title'/></label>
                        <Field name="title" className="form-control" id="title" /><br />
                        <label htmlFor="description">Mô tả: <ErrorMessage component={'span'} className='err' name='description'/></label>
                        <Field name="description" className="form-control" id="description"/><br />
                        <label htmlFor="price">Giá: <ErrorMessage component={'span'} className='err' name='price'/></label>
                        <Field name="price" className="form-control" id="price"/><br />
                        <button type='submit' className="btn btn-primary">Thêm</button>
                        <Link to={'/'} className='btn btn-primary m-2'>Trở lại</Link>
                </Form>
            </Formik>
        </>
    )
}

export default AddProductPage;