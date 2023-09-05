import Image from "next/image"
import logoPic from '@/public/assets/icons/white_logo.svg'
import forwardinPic from '@/public/assets/icons/white_forwardin.png'
const Footer = () => {
    return (
        <footer className="bg-primary w-full pt-16">
            <div className="mx-auto px-6 text-white text-sm flex flex-col lg:flex-row gap-8 xl:gap-36 lg:justify-between w-full lg:w-[65%]">
                <div className="lg:basis-1/3">
                    <div className="flex gap-4 items-center">
                        <div>
                            <Image
                                src={logoPic}
                                alt="logo"
                            />
                        </div>
                        <div>
                            <Image
                                src={forwardinPic}
                                alt="forwardin"
                            />
                        </div>
                    </div>
                    <p className="mt-12">FowardIt is your ultimate communication management solution. We empower businesses of all sizes with efficient message forwarding, streamlined contact management, and powerful campaign scheduling. Our mission is to simplify your communication processes, helping you engage with your audience effectively and effortlessly. Join us in transforming your communication game today!
                    </p>
                </div>
                <div className="lg:basis-1/3">
                    <p className="text-[16px] font-bold">Contact Us</p>
                    <p className="mt-8">Join our mailing list to receive updates, exclusive content, and early access to upcoming events. By signing up, you become an integral part of our community, spreading the message of compassion and making a difference.</p>
                    <p className="mt-8">Email: info@fowarit</p>
                    <p>Phone: +1 (123) 456-7890</p>
                </div>
                <div className="lg:basis-1/3">
                    <p className="text-[16px] font-bold">Lets Talk</p>
                    <p className="mt-8">Facebook</p>
                    <p>Instagram</p>
                    <p>Twitter</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer