/* eslint-disable @next/next/no-img-element */
import LazyImage from '@/components/LazyImage'
import { siteConfig } from '@/lib/config'
import Link from 'next/link'

/**
 * 博文列表
 * @param {*} param0
 * @returns
 */
export const Blog = ({ posts }) => {
  const enable = siteConfig('PROXIO_BLOG_ENABLE')
  if (!enable) {
    return null
  }

  return (
    <>
      {/* */}
      <section className='bg-white pt-20 dark:bg-dark lg:pt-[120px]'>
        <div className='container mx-auto'>
          {/* 区块标题文字 */}
          <div
            className='-mx-4 flex flex-wrap justify-center wow fadeInUp'
            data-wow-delay='.2s'>
            <div className='w-full px-4 py-4'>
              <div className='mx-auto max-w-[485px] text-center space-y-4'>
                <span className='px-3 py-0.5 rounded-2xl mb-2 dark:bg-dark-1 border border-gray-200 dark:border-[#333333] dark:text-white'>
                  {siteConfig('PROXIO_BLOG_TITLE')}
                </span>

                <h2 className='text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px] md:leading-[1.2]'>
                  {siteConfig('PROXIO_BLOG_TEXT_1')}
                </h2>
              </div>
            </div>
          </div>
          {/* 博客列表 */}
          <div className='-mx-4 grid md:grid-cols-2 grid-cols-1'>
            {posts?.map((item, index) => {
              return (
                <div key={index} className='w-full px-4'>
                  <div
                    className='wow fadeInUp group mb-10'
                    data-wow-delay={`${index * 0.1}s`}>

                    {/* 卡片内容区域 */}
                    <div className='relative rounded-xl border overflow-hidden shadow-md dark:border-gray-700'>
                      <Link href={item?.href} className='block'>
                        {/* 封面图 */}
                        <LazyImage
                          src={item.pageCoverThumbnail}
                          alt={item.title}
                          className='w-full h-80 object-cover transition-transform duration-500 rounded-xl group-hover:scale-110'
                        />
                        {/* 鼠标悬停时的半透明黑色遮罩 */}
                        <div className='absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-40'></div>
                      </Link>
                    </div>

                    {/* 文字内容部分 */}
                    <div className='relative z-10 p-4'>
                      <span className='inline-block text-center text-xs font-medium leading-loose text-gray-500 dark:text-gray-400'>
                        {item.publishDay}
                      </span>
                      <h3>
                        <Link
                          href={item?.href}
                          className='mb-4 inline-block text-xl font-semibold text-dark hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl'>
                          {item.title}
                        </Link>
                      </h3>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
      {/* */}
    </>
  )
}
