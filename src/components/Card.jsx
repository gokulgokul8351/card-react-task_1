import React from 'react'
import './Card.css'
import image1 from '../assets/1.jpg'
import image2 from '../assets/2.jpg'
import image3 from '../assets/3.jpg'
import image4 from '../assets/4.jpg'
import image5 from '../assets/5.jpg'
import image6 from '../assets/6.jpg'
import image7 from '../assets/7.jpg'
import image8 from '../assets/8.jpg'
import image9 from '../assets/9.jpg'
import image10 from '../assets/10.jpg'

const Card = () => {
  const count = () => {
    for (let i = 0; i <= 10; i++) {
      count(i)
    }
  }

  return (
    <>
      <div className="containers">
        <h1 className="heading">List Items</h1>
        <div className="box-container">
          <div className="box">
            <img
              src={image1}
              alt=""
            />
            <h3>Image 1</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis,
              similique? Corrupti eos repellendus nihil, labore, impedit quasi
              quia aliquid natus fugit minus illum facere sequi fugiat minima et
              nulla molestiae.
            </p>
            <button
              type="button"
              className="btn"
            >
              read more
            </button>
          </div>
          <div className="box">
            <img
              src={image2}
              alt=""
            />
            <h3>Image 2</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis,
              similique? Corrupti eos repellendus nihil, labore, impedit quasi
              quia aliquid natus fugit minus illum facere sequi fugiat minima et
              nulla molestiae.
            </p>
            <button
              type="button"
              className="btn"
            >
              read more
            </button>
          </div>
          <div className="box">
            <img
              src={image3}
              alt=""
            />
            <h3>Image 3</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis,
              similique? Corrupti eos repellendus nihil, labore, impedit quasi
              quia aliquid natus fugit minus illum facere sequi fugiat minima et
              nulla molestiae.
            </p>
            <button
              type="button"
              className="btn"
            >
              read more
            </button>
          </div>
          <div className="box">
            <img
              src={image4}
              alt=""
            />
            <h3>Image 4</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis,
              similique? Corrupti eos repellendus nihil, labore, impedit quasi
              quia aliquid natus fugit minus illum facere sequi fugiat minima et
              nulla molestiae.
            </p>
            <button
              type="button"
              className="btn"
            >
              read more
            </button>
          </div>
          <div className="box">
            <img
              src={image5}
              alt=""
            />
            <h3>Image 5</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis,
              similique? Corrupti eos repellendus nihil, labore, impedit quasi
              quia aliquid natus fugit minus illum facere sequi fugiat minima et
              nulla molestiae.
            </p>
            <button
              type="button"
              className="btn"
            >
              read more
            </button>
          </div>
          <div className="box">
            <img
              src={image6}
              alt=""
            />
            <h3>Image 6</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis,
              similique? Corrupti eos repellendus nihil, labore, impedit quasi
              quia aliquid natus fugit minus illum facere sequi fugiat minima et
              nulla molestiae.
            </p>
            <button
              type="button"
              className="btn"
            >
              read more
            </button>
          </div>
          <div className="box">
            <img
              src={image7}
              alt=""
            />
            <h3>Image 7</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis,
              similique? Corrupti eos repellendus nihil, labore, impedit quasi
              quia aliquid natus fugit minus illum facere sequi fugiat minima et
              nulla molestiae.
            </p>
            <button
              type="button"
              className="btn"
            >
              read more
            </button>
          </div>
          <div className="box">
            <img
              src={image8}
              alt=""
            />
            <h3>Image 8</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis,
              similique? Corrupti eos repellendus nihil, labore, impedit quasi
              quia aliquid natus fugit minus illum facere sequi fugiat minima et
              nulla molestiae.
            </p>
            <button
              type="button"
              className="btn"
            >
              read more
            </button>
          </div>
          <div className="box">
            <img
              src={image9}
              alt=""
            />
            <h3>Image 9</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis,
              similique? Corrupti eos repellendus nihil, labore, impedit quasi
              quia aliquid natus fugit minus illum facere sequi fugiat minima et
              nulla molestiae.
            </p>
            <button
              type="button"
              className="btn"
            >
              read more
            </button>
          </div>
          <div className="box">
            <img
              src={image10}
              alt=""
            />
            <h3>Image 10</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis,
              similique? Corrupti eos repellendus nihil, labore, impedit quasi
              quia aliquid natus fugit minus illum facere sequi fugiat minima et
              nulla molestiae.
            </p>
            <button
              type="button"
              className="btn"
            >
              read more
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
export default Card
