import React from 'react';

const Footer = () => {
    return (
        <div className="footer flex flex-col sm:flex-row justify-center sm:justify-between items-center sm:items-start text-base-content max-w-292.5 mx-auto">
            <nav className="mb-6 sm:mb-0 flex! flex-col! items-center! sm:items-start!">
                <h6 className="footer-title">Services</h6>
                <a className="link link-hover block">Branding</a>
                <a className="link link-hover block">Design</a>
                <a className="link link-hover block">Marketing</a>
                <a className="link link-hover block">Advertisement</a>
            </nav>
            <nav className="mb-6 sm:mb-0 flex! flex-col! items-center! sm:items-start!">
                <h6 className="footer-title">Company</h6>
                <a className="link link-hover block">About us</a>
                <a className="link link-hover block">Contact</a>
                <a className="link link-hover block">Jobs</a>
                <a className="link link-hover block">Press kit</a>
            </nav>
            <nav className="mb-6 sm:mb-0 flex! flex-col! items-center! sm:items-start!">
                <h6 className="footer-title">Legal</h6>
                <a className="link link-hover block">Terms of use</a>
                <a className="link link-hover block">Privacy policy</a>
                <a className="link link-hover block">Cookie policy</a>
            </nav>
            <form className="flex! flex-col! items-center! sm:items-start!">
                <h6 className="footer-title">Newsletter</h6>
                <fieldset className="w-full sm:w-80">
                    <label className="block mb-2">Enter your email address</label>
                    <div className="flex flex-col sm:flex-row sm:space-x-2.5 gap-2">
                        <input
                            type="text"
                            placeholder="username@site.com"
                            className="input input-bordered w-full" />
                        <div className='text-center sm:text-right'>
                            <button className="btn btn-primary w-full sm:w-auto">Subscribe</button>
                        </div>
                    </div>
                </fieldset>
            </form>
        </div>
    );
};

export default Footer;