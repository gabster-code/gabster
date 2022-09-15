import React, {useState} from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { HiOutlineChevronDoubleUp } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaExclamationCircle, FaGithub, FaLinkedin,  } from 'react-icons/fa'
import Link from 'next/link'
import Image from 'next/image'

const Contact = () => {
//Email Form States
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

    //   Form validation state
    const [errors, setErrors] = useState({});

    //   Setting button text on form submission
    const [buttonText, setButtonText] = useState("Send");
  
    // Setting success or failure messages states
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showFailureMessage, setShowFailureMessage] = useState(false);

  const handleValidation = () => {
    let tempErrors = {};
    let isValid = true;

    if (fullname.length <= 0) {
      tempErrors["fullname"] = true;
      isValid = false;
      alert('Please enter your name.')
    }
    if (email.length <= 0) {
      tempErrors["email"] = true;
      isValid = false;
    }
    if (subject.length <= 0) {
      tempErrors["subject"] = true;
      isValid = false;
    }
    if (message.length <= 0) {
      tempErrors["message"] = true;
      isValid = false;
    }

    setErrors({ ...tempErrors });
    console.log("errors", errors);
    return isValid;
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();

    let isValidForm = handleValidation();


    if (isValidForm) {
      setButtonText("Sending");
      const res = await fetch("/api/sendgrid", {
        body: JSON.stringify({
          email: email,
          fullname: fullname,
          subject: subject,
          message: message,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      const { error } = await res.json();
      if (error) {
        console.log(error);
        setShowSuccessMessage(false);
        setShowFailureMessage(true);
        setButtonText("Send");
        return;
      }
      setShowSuccessMessage(true);
      setShowFailureMessage(false);
      setButtonText("Send");
    }
    console.log(fullname, email, subject, message);
  };
  

  return (
    <div id='contact' className='w-full lg:h-screen'>
      <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
        <p className='text-xl tracking-widest uppercase text-[#0c7feb] '>Contact</p>
        <h2 className='py-4 '>Work With Me!</h2>
        <div className='grid lg:grid-cols-5 gap-8'>
          {/*left*/}
            <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
              <div className='lg:p-4 h-full rounded-xl'>
                <div>
                  <img className='rounded-xl hover:scale-105 ease-in duration-300' src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80" alt=""/>
                  
                </div>
                <div>
                  <h2 className='py-2'>Gab Jornacion</h2>
                  <p>Web3 Developer</p>
                  <p className='py-4'>Hire me for your Web3 Projects! Currently available on a project basis and part-time positions. Connect with me and let's talk.</p>
                </div>
                <div>
                <p className='uppercase pt-8'>Connect With Me!</p>
                <div className='flex items-center justify-between py-4'>
                <a href="https://www.linkedin.com/in/kevin-karl-jornacion-ab94aa8b/" target='_blank'
                        rel='noreferrer'>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                <FaLinkedin></FaLinkedin>
                            </div>
                        </a>
                        <a href="https://github.com/gabster-code" target='_blank'
                        rel='noreferrer'>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                <FaGithub></FaGithub>
                            </div>
                        </a>
                        <Link href='/#contact'>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                <AiOutlineMail></AiOutlineMail>
                            </div>
                        </Link>
                        <Link href='/resume'>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <BsFillPersonLinesFill></BsFillPersonLinesFill>
                        </div>
                        </Link>
                </div>
              </div>
              </div>
            </div>
          {/*right*/}
          <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
            <div className='py-4'>
              <form onSubmit={handleSubmit}>
                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                  
                  <div className='flex flex-col'>
                      <label htmlFor="fullname" className='uppercase text-sm py-2'>Name</label>
                      <input required className='border-2 rounded-lg p-3 flex border-gray-300' type="text" value={fullname}
            onChange={(e) => {
              setFullname(e.target.value);
            }}
            name="fullname" />
                  </div>
                  <div className='flex flex-col'>
                      <label  className='uppercase text-sm py-2'>Phone Number</label>
                      <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" />
                  </div>
      
                </div>
                <div className='flex flex-col py-2'>
                  <label htmlFor="email" className='uppercase text-sm py-2'>Email</label>
                  <input required className='border-2 rounded-lg p-3 flex border-gray-300' type="email"  name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}/>
                </div>
                <div className='flex flex-col py-2'>
                  <label htmlFor="subject" className='uppercase text-sm py-2'>Subject</label>
                  <input required className='border-2 rounded-lg p-3 flex border-gray-300' type="text" name="subject"
            value={subject}
            onChange={(e) => {
              setSubject(e.target.value);
            }} />
                </div>
                <div className='flex flex-col py-2'>
                  <label  htmlFor="message" className='uppercase text-sm py-2'>Message</label>
                  <textarea required name="message"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }} className='border-2 rounded-lg p-3 border-gray-300' rows='10'></textarea>
                </div>
                <button onClick={handleSubmit} className='w-full p-4 text-gray-100 mt-4'>Send Message</button>
              </form>
            </div>

          </div>

        </div>
        <div className='flex justify-center py-12'>
          <Link href='/'>
          <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
              <HiOutlineChevronDoubleUp className='text-[#0c7feb]' size={30}></HiOutlineChevronDoubleUp>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Contact