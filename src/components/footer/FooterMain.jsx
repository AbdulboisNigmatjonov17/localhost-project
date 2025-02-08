import { FooterData } from './footerData'
const FooterMain = () => {
  return (
    <div className='w-full bg-[#F4F4F4]'>
      <div className='Container w-full flex justify-between py-10'>
        {
          FooterData.map((item) => {
            return (
              <ul key={item.id} className='w-[33%] flex flex-col gap-2'>
                <h3 className='font-semibold mb-1 text-[20px] leading-[22px]'>{item.h1}</h3>
                <li className='font-normal text-[16px] leading-[17px]'>{item.li1}</li>
                <li className='font-normal text-[16px] leading-[17px]'>{item.li2}</li>
                <li className='font-normal text-[16px] leading-[17px]'>{item.li3}</li>
                <li className='font-normal text-[16px] leading-[17px]'>{item.li4}</li>
                <li className='font-normal text-[16px] leading-[17px]'>{item.li5}</li>
              </ul>
            )
          })
        }
      </div>
    </div>
  )
}

export default FooterMain