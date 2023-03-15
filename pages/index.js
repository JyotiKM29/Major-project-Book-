import Head from "next/head"
import { Typography ,Box } from '@mui/material'
import Avatar from '@mui/material/Avatar'
import styles from '../styles/Pages/Sidebar.module.scss'
import Image from 'next/image'



function Homepage(){
    return (
        <>
          <Head>
          <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" rel="stylesheet" />

          </Head>
          <div >
          <div className={styles.dashboard}>
      
      {/* Icons of side bar */}
    <div className={styles.sidebar}>
      
      <div className={styles.icons}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.12} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
      </div>

      {/* dashboard */}
      <div className={styles.icons}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.12} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
      </div>

      {/* favrate */}
      <div className={styles.icons}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.12} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
      </div>

      {/* Cart */}
      <div className={styles.icons}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.12} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
      </svg>
      </div>

      {/*Profile Setting*/}
      <div className={styles.icons}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.12} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>

      </div>
    </div>
      
      {/* Verticle line */}
      <div className={styles.verLine}></div>

          <div className={styles.main}>
                    {/* Box 1 */}
                  <div className={styles.box1}>
                      <div className={styles.searchbar}>
     
                        <div className={styles.search__icon}>
                              <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-6 h-6">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                              </svg>
                        </div>

                        <input 
                         type='text' 
                         placeholder="search book name, author, edition..." 
                         className={styles.search__input} />
                        </div>
                  </div>

                  {/* Box 2 */}
                  <div className={styles.box2}>
                    <div className={styles.profilebar}>
                         <Avatar alt="Remy Sharp" src="/profile/jyoti.png" />
                         <Typography variant='body1' sx={{padding:2, color:"#16151a"}}>Jyoti Kumari</Typography>
                        <div className={styles.icons}>
                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-6 h-6">
                         <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                         </svg>
                        </div>
                    </div>
                  </div>

                  {/* Row 1 */}
                  <div className={styles.row1}>
                      <div className={styles.slider}>
                        <Typography variant='h3' className={styles.heading1} sx={{fontFamily:"serif"}}>Friction Books</Typography>


                         <div className={styles.card1}>
                         <Image src="/books/book1.png" width={200} height={300} className={styles.img} />
                         <div className={styles.caption}>Beauty and the Beast</div>
                         </div>
                         <div className={styles.card1}>
                         <Image src="/books/book2.png" width={200} height={300} className={styles.img} />
                         <div className={styles.caption}>Beauty and the Beast</div>
                         </div>
                         <div className={styles.card1}>
                         <Image src="/books/book3.png" width={200} height={300} className={styles.img} />
                         <div className={styles.caption}>Beauty and the Beast</div>
                         </div>
                         <div className={styles.card1}>
                         <Image src="/books/book4.png" width={200} height={300} className={styles.img} />
                         <div className={styles.caption}>Beauty and the Beast</div>
                         </div>
                         <div className={styles.card1}>
                         <Image src="/books/book5.png" width={200} height={300} className={styles.img} />
                         <div className={styles.caption}>Beauty and the Beast</div>
                         </div>

                         <div className={styles.card1}>
                         <Image src="/books/book7.png" width={200} height={300} className={styles.img} />
                         <div className={styles.caption}>Beauty and the Beast</div>
                         </div>

                    

                    <Typography variant='h3' className={styles.heading2} sx={{fontFamily:"sans"}}>Non-Friction Books</Typography>

                        <div className={styles.card2}>
                         <Image src="/books/book11.png" width={200} height={300} className={styles.img} />
                         <div className={styles.caption}>Beauty and the Beast</div>
                         </div>
                         <div className={styles.card2}>
                         <Image src="/books/book12.png" width={200} height={300} className={styles.img} />
                         <div className={styles.caption}>Beauty and the Beast</div>
                         </div>
                         <div className={styles.card2}>
                         <Image src="/books/book13.png" width={200} height={300} className={styles.img} />
                         <div className={styles.caption}>Beauty and the Beast</div>
                         </div>
                         <div className={styles.card2}>
                         <Image src="/books/book14.png" width={200} height={300} className={styles.img} />
                         <div className={styles.caption}>Beauty and the Beast</div>
                         </div>
                         <div className={styles.card2}>
                         <Image src="/books/book15.png" width={200} height={300} className={styles.img} />
                         <div className={styles.caption}>Beauty and the Beast</div>
                         </div>

                         <div className={styles.card2}>
                         <Image src="/books/book16.png" width={200} height={300} className={styles.img} />
                         <div className={styles.caption}>Beauty and the Beast</div>
                         </div>
                    </div>
                         
           </div>
                  {/* Row 2 */}
                  <div className={styles.row2}></div>
                  {/* Row 3 */}
                  <div className={styles.row3}></div>
          </div>
      </div>

          </div>
        </>
    )
}
export default Homepage