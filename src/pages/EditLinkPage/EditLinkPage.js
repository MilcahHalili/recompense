import React, { Component } from 'react'
import Select from 'react-select'
import { Link, Redirect } from 'react-router-dom'
import serviceCategories from '../../category-data'
import serviceCities from '../../city-data'

class EditLinkPage extends Component {
    state = {
        invalidForm: true,
        formData: this.props.location.state ? this.props.location.state.link : null
    }

    formRef = React.createRef()

    handleSubmit = e => {
        e.preventDefault()
        this.props.handleUpdateLink(this.state.formData)
    }

    handleChange = e => {
        const formData = {...this.state.formData, [e.target.name]: e.target.value}
        this.setState({
            formData,
            invalidForm: !this.formRef.current.checkValidity()
        })
    }

    handleChangeCategories = categories => {
        this.setState({
            formData: {...this.state.formData, categories},
            invalidForm: !this.formRef.current.checkValidity
        })
    }

    handleChangeCities = cities => {
        this.setState({
            formData: {...this.state.formData, cities},
            invalidForm: !this.formRef.current.checkValidity
        })
    }

    renderEditLinkForm() {
        // const link = props.location.state.link

        return (
            <div className="add-service-page">
                <div className="page-header">
                    <p className='page-title'>Edit Link :: </p>
                    {/* <Link to={link._id}>cancel</Link> */}
                </div>
                <div className='add-service-form'>
                    <form 
                        ref={this.formRef} 
                        autoComplete="off" 
                        onSubmit={this.handleSubmit}
                    >
                        <div className='form-item'>
                            <label className='service-label'>Link Name :: </label>
                            <input
                                className="service-form"
                                name="name"
                                value={this.state.formData.name}
                                onChange={this.handleChange}
                                required
                            /> 
                        </div>
                        <div className='form-item'>
                            <label className='service-label'>Description of Link :: </label>
                            <textarea 
                                className="service-form description"
                                name="description"
                                value={this.state.formData.description}
                                onChange={this.handleChange}
                                required
                            />
                        </div>
                        <div className='form-item'>
                            <label className='service-label'>Venmo for Link :: </label>
                            <input 
                                className="service-form"
                                name="exchange"
                                value={this.state.formData.venmo}
                                onChange={this.handleChange}
                                required
                            />
                        </div>
                        <div className='form-item'>
                            <label className='service-label'>Cashapp for Link :: </label>
                            <input 
                                className="service-form"
                                name="exchange"
                                value={this.state.formData.cashapp}
                                onChange={this.handleChange}
                                required
                            />
                        </div>
                        <div className='form-item'>
                            <label className='service-label'>PayPal for Link :: </label>
                            <input 
                                className="service-form"
                                name="exchange"
                                value={this.state.formData.paypal}
                                onChange={this.handleChange}
                                required
                            />
                        </div>
                        <div className='form-item'>
                            <label className='service-label'>City, State :: </label>
                            <Select
                                className='service-categories'
                                value={this.state.formData.cities}
                                isMulti
                                name="cities"
                                onChange={this.handleChangeCities}
                                options={serviceCities}
                                required
                            />
                            </div>
                            <div className='form-item'>
                            <label className='service-label'>Categories of Link :: </label>
                            <Select
                                className='service-categories'
                                value={this.state.formData.categories}
                                isMulti
                                name="categories"
                                onChange={this.handleChangeCategories}
                                options={serviceCategories}
                                required
                            />
                            </div>
                            <div className='form-item'>
                            <label className='service-label'>Contact Email :: </label>
                            <input 
                                className="service-form"
                                name="contactEmail"
                                value={this.state.formData.contactEmail}
                                onChange={this.handleChange}
                                required
                            />
                        </div>
                        <div className='add-links'>
                            <Link className='cancel-button' to='/directaidlinks'>Cancel</Link>
                            <button
                                className="btn"
                                type="submit"
                                disabled={this.state.invalidForm}
                            >
                                Update Link
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }

    render() {
        return this.state.formData ? this.renderEditLinkForm() : <Redirect to='/directaidlinks' />;
    }
}

export default EditLinkPage