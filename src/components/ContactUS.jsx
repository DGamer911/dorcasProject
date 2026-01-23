import { Phone, Mail, MessageCircle } from "lucide-react";
import "../style.css";


function ContactUS() {
  return (
 <section id="contactUs" className="w-full relative bg-[var(--grey)] flex justify-center items-center">
        <div className="flex flex-col px-2 mb-20 gap-5 items-center">
          <div className="max-w-[800px] w-full p-12 gap-3 flex bg-[var(--white)] rounded-4xl flex-col items-center text-center">
            <Phone
              className="text-[var(--white)] p-4 int w-[50px] h-[50px] bg-[var(--wine-red)] rounded-4xl"
              size={40}
            />
            <h3
              style={{ fontFamily: "DynaPuff" }}
              className="text-xl font-bold"
            >
              Contact Us
            </h3>
            <p>
              Have a question, need support, or want to place an order? We’d
              love to hear from you Reach out to us anytime and we’ll get back
              to you as soon as possible. Whether it’s enquires, custom
              requests, or general feedback, our team is always ready to help
            </p>
          </div>
          <div className="flex gap-3 lg:max-w-[800px] w-full flex-wrap items-center">
            <div className="bg-[var(--white)] grow-1 flex flex-col gap-4 items-center rounded-2xl p-6">
              <MessageCircle
                className="text-[var(--white)] p-4 int w-[50px] h-[50px] bg-green-500 rounded-4xl"
                size={40}
              />
              <div className="flex items-center flex-col gap-2">
                <span className="py-2 px-4 min-w-[180px] text-center bg-[var(--grey)] rounded-4xl"> 0907 909 8366</span>
                
                  <a className="py-2 text-center min-w-[180px] px-4 text-[var(--wine-red)] bg-[var(--grey)] rounded-4xl"
                    target="_blank"
                    href="https://wa.me/09079098366?text=Hello%20Roddob%27s%20Crochet!%20I%27d%20like%20to%20place%20an%20order."
                  >
                    Direct Chat
                  </a>
         
              </div>
            </div>
            <div className="bg-[var(--white)] grow-1 flex flex-col gap-4 items-center rounded-2xl p-6">
              <Phone
                className="text-[var(--white)] p-4 int w-[50px] h-[50px] bg-[var(--wine-red)] rounded-4xl"
                size={40}
              />
              <div className="flex items-center flex-col gap-2">
                <span className="py-2 px-4 min-w-[180px] text-center bg-[var(--grey)] rounded-4xl"> 0907 909 8366</span>
                <span className="py-2 px-4 min-w-[180px] text-center bg-[var(--grey)] rounded-4xl"> 0803 260 5562</span>
            
         
              </div>
            </div>
            <div className="bg-[var(--white)] flex grow-1 flex-col gap-4 items-center rounded-2xl p-6">
              <Mail
                className="text-[var(--white)] p-4 int w-[50px] h-[50px] bg-green-500 rounded-4xl"
                size={40}
              />
              <div className="flex items-center flex-col gap-2">
                <span className="py-2 px-4 min-w-[180px] text-center bg-[var(--grey)] rounded-4xl">dorcasobielodan@gmail.com</span>
                <span className="py-2 px-4 min-w-[180px] text-center bg-[var(--grey)] rounded-4xl">ronkeobieloglan@gmail.com</span>
              </div>
            </div>

          </div>
        </div>
      </section>
  )
}

export default ContactUS;