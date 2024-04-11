import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Form, Formik, Field, ErrorMessage } from 'formik';
import {  updateProduct } from '../service/productService';
import { useNavigate } from 'react-router-dom';
import {useLocation} from 'react-router-dom'
import * as Yup from 'yup'
import { Link } from 'react-router-dom';
function EditProductPage(){
    const navigate = useNavigate()
    const product = useLocation().state
        const handleSubmit = (value) => {
            const data = {
                id:product.id,
                ...value
            }
            console.log(data);
            updateProduct(data)
            navigate('/')
            toast.success("OK")
        }
        return (
            <>
            <h1>Cập nhật</h1>
                <Formik
                initialValues={{
                    title: product.title,
                    description: product.description,
                    price: product.price
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
                        <Field name="price" className="form-control" id="price"/><br/>
                        <button type='submit' className="btn btn-primary">Sửa</button>
                        <Link to={'/'} className='btn btn-primary m-3'>Trở lại</Link>
                </Form>
                </Formik>
            </>
        )
}
export default EditProductPage;