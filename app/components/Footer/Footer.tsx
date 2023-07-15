import { FaPhone, FaEnvelope, FaFacebook, FaYoutube, FaInstagram, FaTiktok, FaTwitter, FaDiscord, FaPatreon } from 'react-icons/fa'
import styles from './Footer.module.scss';


const Footer = () => {
  return (
    <footer className={`${styles.footer} w-full bg-primary flex flex-col md:flex-row text-white items-center md:justify-center md:px-42`}>
      <article className={styles.social}>
        <div>
          <h2>
            Dołącz do nas na:
          </h2>
          <div className='flex'>
            <a href='https://www.tiktok.com/@minecraft4politics' target='_blank'>
              <FaTiktok />
            </a>
            <a href='https://twitter.com/M4Politics' target='_blank'>
              <FaTwitter />
            </a>
            <a href='https://discord.gg/minecraft4politics-734417514934698065' target='_blank'>
              <FaDiscord />
            </a>
          </div>
        </div>
      </article>
    </footer >
  );
}

export default Footer