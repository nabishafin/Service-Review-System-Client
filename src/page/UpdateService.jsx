
import React, { useContext, useEffect, useState } from 'react';
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { AuthContext } from '../provider/AuthProvider';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';




const UpdateService = () => {

    const navigate = useNavigate()
    const [startDate, setStartDate] = useState(new Date())
    const { id } = useParams()
    const { user } = useContext(AuthContext)

    const [service, setService] = useState([])
    console.log(service)
    useEffect(() => {
        fetchAllJobs()
    }, [])

    const fetchAllJobs = async () => {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/service/${id}`)
        setService(data)
        setStartDate(new Date(data.date))
    }







    const handleService = async (e) => {
        e.preventDefault()
        const form = e.target

        const serviceImage = form.image.value;
        const title = form.title.value;
        const companyName = form.companyName.value;
        const website = form.website.value;
        const description = form.description.value;
        const category = form.category.value;
        const price = parseFloat(form.price.value);
        const date = startDate;
        const email = form.email.value;
        const fromdata = { serviceImage, title, companyName, website, description, category, price, date, email }
        try {
            await axios.put(`${import.meta.env.VITE_API_URL}/updateservice/${id}`, fromdata)
            toast.success('Updated Successfully')
            form.reset()
            navigate('/myServices')
        }
        catch (err) {
            toast.error(err.message)
        }
    }


    return (
        <div>
            <div className="container mx-auto py-12">
                <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
                    <h2 className="text-3xl font-semibold text-center mb-8">UpdateService</h2>
                    <form onSubmit={(e) => { handleService(e) }} className="space-y-6">

                        {/* Service Image  */}
                        <div>
                            <label htmlFor="service-image" className="block text-lg font-medium">Service Image</label>
                            <input type="text" name="image" placeholder='service-image-url' defaultValue={service.serviceImage} className="input input-bordered w-full" required />
                        </div>

                        {/* <!-- Service Title --> */}
                        <div>
                            <label for="service-title" className="block text-lg font-medium">Service Title</label>
                            <input type="text" id="service-title" name="title" defaultValue={service.title} placeholder='service-title' className="input input-bordered w-full" required />
                        </div>

                        {/* <!-- Company Name --> */}
                        <div>
                            <label htmlFor="company-name" className="block text-lg font-medium">Company Name</label>
                            <input type="text" id="company-name" name="companyName" defaultValue={service.companyName} placeholder='company-name' className="input input-bordered w-full" required />
                        </div>

                        {/* <!-- Website --> */}
                        <div>
                            <label htmlFor="website" className="block text-lg font-medium">Website</label>
                            <input type="text" id="website" name="website" defaultValue={service.website} placeholder='website' className="input input-bordered w-full" required />
                        </div>

                        {/* <!-- Description --> */}
                        <div>
                            <label htmlFor="description" className="block text-lg font-medium">Description</label>
                            <textarea id="description" name="description" rows="4" defaultValue={service.description} placeholder='description' className="textarea textarea-bordered w-full" required></textarea>
                        </div>

                        {/* <!-- Category --> */}
                        <div>
                            <label htmlFor="category" className="block text-lg font-medium">Category</label>
                            <select id="category" name="category" defaultValue={service.category} className="select select-bordered w-full" required>
                                <option value="" disabled selected>Select a category</option>
                                <option value="Technology">Technology</option>
                                <option value="Health">Health</option>
                                <option value="Food & Beverage">Food & Beverage</option>
                                <option value="Education">Education</option>
                                <option value="Finance">Finance</option>
                            </select>
                        </div>

                        {/* <!-- Price --> */}
                        <div>
                            <label htmlFor="price" className="block text-lg font-medium">Price</label>
                            <input type="number" id="price" name="price" defaultValue={service.price} placeholder='0 BDT' className="input input-bordered w-full" required />
                        </div>

                        {/* <!-- Added Date (Auto-generated) --> */}
                        <div>
                            <label htmlFor="added-date" className="block text-lg font-medium">Added Date</label>

                            <DatePicker
                                className='border-2 defaultValue={service.date} p-2 rounded-md'
                                selected={startDate}
                                onChange={date => setStartDate(date)}
                            />
                        </div>

                        {/* <!-- User Email --> */}
                        <div>
                            <label htmlFor="user-email" className="block text-lg font-medium">User Email</label>
                            <input type="email" id="user-email" name="email" className="input input-bordered w-full" defaultValue={user?.email}
                                disabled={true} readonly />
                        </div>

                        {/* <!-- Submit Button --> */}
                        <div>
                            <button type="submit" className="btn btn-primary w-full">Update Service</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateService;