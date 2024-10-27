import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-blue-800 text-gray-400 py-10">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-10">
                <div>
                    <h3 className="text-white mb-4">Solutions</h3>
                    <ul>
                        <li className="mb-2"><a href="#" className="hover:text-white">Marketing</a></li>
                        <li className="mb-2"><a href="#" className="hover:text-white">Analytics</a></li>
                        <li className="mb-2"><a href="#" className="hover:text-white">Commerce</a></li>
                        <li className="mb-2"><a href="#" className="hover:text-white">Insights</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-white mb-4">Support</h3>
                    <ul>
                        <li className="mb-2"><a href="#" className="hover:text-white">Pricing</a></li>
                        <li className="mb-2"><a href="#" className="hover:text-white">Documentation</a></li>
                        <li className="mb-2"><a href="#" className="hover:text-white">Guides</a></li>
                        <li className="mb-2"><a href="#" className="hover:text-white">API Status</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-white mb-4">Company</h3>
                    <ul>
                        <li className="mb-2"><a href="#" className="hover:text-white">About</a></li>
                        <li className="mb-2"><a href="#" className="hover:text-white">Blog</a></li>
                        <li className="mb-2"><a href="#" className="hover:text-white">Jobs</a></li>
                        <li className="mb-2"><a href="#" className="hover:text-white">Press</a></li>
                        <li className="mb-2"><a href="#" className="hover:text-white">Partners</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-white mb-4">Legal</h3>
                    <ul>
                        <li className="mb-2"><a href="#" className="hover:text-white">Claim</a></li>
                        <li className="mb-2"><a href="#" className="hover:text-white">Privacy</a></li>
                        <li className="mb-2"><a href="#" className="hover:text-white">Terms</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-white mb-4">Subscribe to our newsletter</h3>
                    <p className="mb-4">The latest news, articles, and resources, sent to your inbox weekly.</p>
                    <div className="flex">
                        <form>
                            <input type="email" placeholder="Enter your email" className="p-2 rounded bg-gray-800 text-gray-400 focus:outline-none w-full sm:max-w-xs" />
                            <button type="submit" className="p-2 bg-blue-600 rounded text-white hover:bg-blue-700">Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="container mx-auto px-4 mt-10 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
                <p className="mb-6 md:mb-0">© 2024 Blog Inc. All rights reserved.</p>
                <div className="flex space-x-4">
                    <a href="#" className="text-gray-400 hover:text-gray-300">
                    <span className="sr-only">Facebook</span>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M22.675 0h-21.35C.596 0 0 .596 0 1.325v21.351c0 .729.596 1.324 1.325 1.324h11.49v-9.282H9.691v-3.622h3.125v-2.669c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.463.098 2.794.142v3.24l-1.917.001c-1.504 0-1.796.715-1.796 1.763v2.311h3.59l-.467 3.622h-3.123v9.282h6.118c.729 0 1.325-.595 1.325-1.324V1.325C24 .596 23.404 0 22.675 0z" />
                    </svg>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-gray-300">
                    <span className="sr-only">Instagram</span>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path
                        fillRule="evenodd"
                        d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.313 3.608 1.288.975.975 1.225 2.242 1.288 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.313 2.633-1.288 3.608-.975.975-2.242 1.225-3.608 1.288-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.313-3.608-1.288-.975-.975-1.225-2.242-1.288-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.313-2.633 1.288-3.608.975-.975 2.242-1.225 3.608-1.288 1.266-.058 1.646-.07 4.85-.07zm0-2.163C8.756 0 8.331.012 7.053.072 5.758.132 4.512.372 3.438 1.447 2.363 2.522 2.122 3.768 2.063 5.063 2.003 6.341 1.991 6.766 1.991 12s.012 5.659.072 6.937c.06 1.295.302 2.541 1.375 3.615 1.075 1.075 2.321 1.315 3.615 1.375 1.278.06 1.703.072 6.937.072s5.659-.012 6.937-.072c1.295-.06 2.541-.302 3.615-1.375 1.075-1.075 1.315-2.321 1.375-3.615.06-1.278.072-1.703.072-6.937s-.012-5.659-.072-6.937c-.06-1.295-.302-2.541-1.375-3.615C20.049 2.363 18.803 2.122 17.509 2.063 16.231 2.003 15.806 1.991 12 1.991z"
                        clipRule="evenodd"
                        />
                        <path
                        fillRule="evenodd"
                        d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z"
                        clipRule="evenodd"
                        />
                    </svg>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-gray-300">
                    <span className="sr-only">Twitter</span>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M23.954 4.569c-.885.392-1.833.656-2.825.775 1.014-.608 1.794-1.574 2.163-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-2.719 0-4.92 2.2-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.099-.806-.026-1.566-.247-2.229-.616v.061c0 2.385 1.698 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.317 0-.626-.03-.928-.086.627 1.956 2.444 3.381 4.6 3.421-1.68 1.318-3.809 2.105-6.102 2.105-.395 0-.785-.023-1.17-.067 2.179 1.398 4.768 2.211 7.548 2.211 9.054 0 14.001-7.496 14.001-13.986 0-.21 0-.423-.015-.635.962-.695 1.797-1.56 2.457-2.548l-.047-.02z" />
                    </svg>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-gray-300">
                    <span className="sr-only">GitHub</span>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path
                        fillRule="evenodd"
                        d="M12 2c-5.523 0-10 4.477-10 10 0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.004.07 1.532 1.033 1.532 1.033.893 1.531 2.341 1.088 2.91.832.092-.647.35-1.088.637-1.338-2.22-.252-4.555-1.11-4.555-4.943 0-1.091.39-1.983 1.03-2.682-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.563 9.563 0 0112 6.806c.85.004 1.705.115 2.505.337 1.908-1.294 2.746-1.025 2.746-1.025.546 1.377.202 2.394.1 2.647.64.699 1.03 1.591 1.03 2.682 0 3.841-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.337-.012 2.417-.012 2.746 0 .267.18.579.688.48C19.137 20.164 22 16.418 22 12c0-5.523-4.477-10-10-10z"
                        clipRule="evenodd"
                        />
                    </svg>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-gray-300">
                    <span className="sr-only">YouTube</span>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path
                        fillRule="evenodd"
                        d="M19.615 3.184A4.998 4.998 0 0016.14 2H7.86c-1.717 0-3.334.784-4.472 2.017C2.266 5.434 1.75 7.171 1.75 9v6c0 1.829.516 3.566 1.638 4.983C4.525 21.216 6.142 22 7.86 22h8.28c1.717 0 3.334-.784 4.472-2.017C21.734 18.566 22.25 16.829 22.25 15V9c0-1.829-.516-3.566-1.638-4.983zm-2.858 10.48c-.37 1.364-1.38 2.195-2.797 2.195-1.38.03-2.76.03-4.14.03s-2.76 0-4.14-.03c-1.417 0-2.427-.83-2.797-2.195C3.5 13.6 3.5 12 3.5 12s0-1.6.383-2.664C4.253 7.97 5.263 7.14 6.68 7.14c1.38-.03 2.76-.03 4.14-.03s2.76 0 4.14.03c1.417 0 2.427.83 2.797 2.195.37 1.065.383 2.665.383 2.665s0 1.6-.383 2.664z"
                        clipRule="evenodd"
                        />
                        <path fillRule="evenodd" d="M9.545 8.66v6.68L15.318 12 9.545 8.66z" clipRule="evenodd" />
                    </svg>
                    </a>
                </div>
            </div>
        </footer>

    )
}

export default Footer;