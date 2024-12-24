import React, { useContext, useState } from 'react';
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { AuthContext } from '../provider/AuthProvider';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';



const AddServices = () => {
    const navigate = useNavigate()
    const [startDate, setStartDate] = useState(new Date())
    const { user } = useContext(AuthContext)

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
            await axios.post(`${import.meta.env.VITE_API_URL}/allSrvices`, fromdata)
            toast.success('Added Successfully')
            form.reset()
            navigate('/myServices')
        }
        catch (err) {
            toast.error(err.message)
        }
    }


    return (
        <div class="container mx-auto py-12">
            <div class="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
                <h2 class="text-3xl font-semibold text-center mb-8">Add a New Service</h2>
                <form onSubmit={(e) => { handleService(e) }} class="space-y-6">

                    {/* Service Image  */}
                    <div>
                        <label for="service-image" class="block text-lg font-medium">Service Image</label>
                        <input type="text" name="image" placeholder='service-image-url' class="input input-bordered w-full" required />
                    </div>

                    {/* <!-- Service Title --> */}
                    <div>
                        <label for="service-title" class="block text-lg font-medium">Service Title</label>
                        <input type="text" id="service-title" name="title" placeholder='service-title' class="input input-bordered w-full" required />
                    </div>

                    {/* <!-- Company Name --> */}
                    <div>
                        <label for="company-name" class="block text-lg font-medium">Company Name</label>
                        <input type="text" id="company-name" name="companyName" placeholder='company-name' class="input input-bordered w-full" required />
                    </div>

                    {/* <!-- Website --> */}
                    <div>
                        <label for="website" class="block text-lg font-medium">Website</label>
                        <input type="text" id="website" name="website" placeholder='website' class="input input-bordered w-full" required />
                    </div>

                    {/* <!-- Description --> */}
                    <div>
                        <label for="description" class="block text-lg font-medium">Description</label>
                        <textarea id="description" name="description" rows="4" placeholder='description' class="textarea textarea-bordered w-full" required></textarea>
                    </div>

                    {/* <!-- Category --> */}
                    <div>
                        <label for="category" class="block text-lg font-medium">Category</label>
                        <select id="category" name="category" class="select select-bordered w-full" required>
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
                        <label for="price" class="block text-lg font-medium">Price</label>
                        <input type="number" id="price" name="price" placeholder='0 BDT' class="input input-bordered w-full" required />
                    </div>

                    {/* <!-- Added Date (Auto-generated) --> */}
                    <div>
                        <label for="added-date" class="block text-lg font-medium">Added Date</label>
                        <DatePicker
                            className='border p-2 rounded-md'
                            selected={startDate}
                            onChange={date => setStartDate(date)}
                        />
                    </div>

                    {/* <!-- User Email --> */}
                    <div>
                        <label for="user-email" class="block text-lg font-medium">User Email</label>
                        <input type="email" id="user-email" name="email" class="input input-bordered w-full" defaultValue={user?.email}
                            disabled={true} readonly />
                    </div>

                    {/* <!-- Submit Button --> */}
                    <div>
                        <button type="submit" class="btn btn-primary w-full">Submit Service</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddServices;