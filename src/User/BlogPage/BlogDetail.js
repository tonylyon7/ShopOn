import React from 'react'
import './BlogCSS/Blog.css'
import BlogSide from './BlogSide'
import blogImg from './Assets/Rectangle 17.png'
import blogImg2 from './Assets/Layer 2.png'
import blogImg3 from './Assets/Layer 2 (1).png'
import blogImg4 from './Assets/Layer 2 (2).png'
import blogImg5 from './Assets/Layer 2 (3).png'
import blogImg6 from './Assets/Group.png'
import blogImg7 from './Assets/Rectangle 17 (13).png'
import BlogComment from './BlogComment'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'


const BlogDetail = () => {
  return (
    <div>
        <Navbar/>
        <div className='blog-title'>
            <h5 className='text-start ms-5 pt-3 f-style fs-4'>Blog {'>'} A Guide To New Orleans' Best...</h5>
        </div>
        <div className='blog d-sm-flex text-center ms-2 mt-4'>
          <aside className='blogAside f-style fs-5'>
             <BlogSide/>
          </aside>

          <section className='blog-container mt-3 ms-5'>
            <h3 className='text-start b-detail f-style fs-2'>A Guide To New Orleans' Best - From Boutique Hotel <br className='none'/> Maison de la Luz</h3>

            <div className='blog-detail mt-4'>
                <img src={blogImg} className='blog-detail-img b-detail' />

                <div className='d-sm-flex blog-d-text mt-3'>
                    <div className='blog-social text-start f-style fs-5'>
                        <div className='blog-write'>
                            <p className='b-s-text'>Written by</p>
                            <h5>Dorothy Bell</h5>
                        </div>
                        <div className='blog-follow'>
                        <p className='mt-sm-4 b-s-text'>Follow us</p>
                        <div className='blog-social-media d-flex'>
                            <a href='' target='_blank' className='b-social'><img src={blogImg2}/></a>
                            <a href='' target='_blank' className='b-social'><img src={blogImg3}/></a>
                            <a href='' target='_blank' className='b-social'><img src={blogImg4}/></a>
                            <a href='' target='_blank' className='b-social'><img src={blogImg5}/></a>
                            <a href='' target='_blank' className='b-social'><img src={blogImg6}/></a>
                        </div>
                        </div>
                        <div className='blog-tags'>
                        <p className='mt-sm-4 b-s-text'>Tags</p>
                        <h5>Bedroom, Pillow, Blanket</h5>
                        </div>
                    </div>
                    <div className='blog-data text-start f-style fs-5 text-gold '>
                        <p>One of the most important aspects of vacation has always been choosing accommodations. Finding somewhere relaxing and clean with modern furniture and close to amenities can sometimes make or break a vacation. Choosing a hotel has always been at the top of a priority list when it came to vacations.</p>
                        <p>Recently, house sharing on websites like AirBNB has exploded due to its convenience. It offers guests something new - a unique experience - while they are travelling. Instead of a hotel, guests can stay in local apartments, houses, and chalets and get a more authentic experience while abroad.</p>

                        <h4 className='text-dark'>What is a blanket?</h4>
                        <p>Everyone who's ever curled up on the couch with a good movie probably knows that blankets are a cozy layering option. They can be used on top of a comforter or duvet for extra warmth; they can be used on their own; they can even be folded up on the bottom of a bed or hung over the back of a couch to add some style to a room — but what really is a blanket?</p>
                    </div>
                </div>

                <div className='d-sm-flex mt-4 blog-sm'>
                    <div>
                        <img src={blogImg7} className='blog-de-img'/>
                    </div>
                    <div className='text-start ms-sm-5 blog-de-text f-style fs-5 text-gold '>
                        <p>A blanket is a catch-all term for a single-layer, rectangular piece of fabric with bound edges that's used as a cover for warmth. They come in every fabric under the sun. You may find wool blankets, linen blankets, fleece blankets, cashmere blankets and a blanket in just about any other fabric you can think of. They come in varying sizes and varying levels of thickness and warmth.</p>
                        <p>When most people hear the word quilt, they think of a homemade type of bed covering passed down from a grandmother or other older relative. Quilts conjure images of warmth, love, friendship and tradition. They're often viewed as heirlooms, and it's true, quilting is an artform with a rich history. It's also a popular craft, but despite the nostalgia, quilts are anything but old fashioned.</p>
                        <p>At its heart, a quilt is a type of bedding consisting of three layers. One layer of batting is sandwiched between two layers of woven fabric, with all layers all stitched together. The name is derived from the process in which they're made. Quilts are crafted by quilting. They are typically thicker than blankets, and can be used as a layer or on their own.</p>
                    </div>
                </div>
                <div className='text-start ms-sm-5 f-style fs-5 text-gold blog-quite'>
                    <h3 className='text-dark'>What is a quilt?</h3>
                    <p>Traditionally, the top layer of a quilt is decorative — whether it's because of the stitching or the pattern of the fabric — but modern quilts can provide a minimalistic, streamlined look unlike the patched and re-patched quilts of yore. For example, Parachute's Ribbed Quilt comes in a neutral tone, but the corduroy fabric adds both texture and a sense of 1970's nostalgia to your bedroom decor. It makes a subtle statement. Other quilts can be bolder, featuring everything from bright geometric patterns to entire landscapes with wildlife.</p>
                    <p>This is where it gets a little confusing: a modern coverlet can technically be a quilt if the fabric is quilted, but quilts are generally heavier. Even if a coverlet is quilted, it typically won't have the layer of batting that makes a quilt a quilt.</p>
                    <p>Lovey, baby, cradle, premie, stroller, crib and receiving blankets or quilts are all made for infants and toddlers. Some are built for comfort, like a security blanket, and others function as an added layer of warmth or are used for swaddling, changing and burping. These are used at various stages of a child's development, from swaddling in the neonatal unit to inside strollers and carseats.</p>
                    <p>Overall, blankets and quilts have more size options than comforters and duvets, especially when you start getting into baby blanket sizes. The standard blanket sizes are as follows:</p>
                    <p>
                    - Lovey: 12” x 12” <br/>
                    - Baby: 14” x 16” <br/>
                    - Cradle: 14” x 30” <br/>
                    - Premie: 18” x 24” <br/>
                    - Stroller: 22”-30” x 30” to 36” <br/>
                    - Lapghan: 36” x 48” <br/>
                    - Receiving: 40” by 40” <br/>
                    - Crib: 45” x 60” <br/>
                    - Throw: 50” x 65” <br/>
                    - Afghan: 50” x 65” (though they can vary) <br/>
                    - Twin: 65” x 90” <br/>
                    - Double (a.k.a full size blanket dimensions): 85” x 90” <br/>
                    - Queen: 90” x 90” to 100” <br/>
                    - King: 108” x 90” to 100” <br/>
                    </p>
                </div>

                    <BlogComment/>
            </div>
          </section>
          </div>

          <Footer/>
    </div>
  )
}

export default BlogDetail
