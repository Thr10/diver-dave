"use client"

/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { Popover } from '@headlessui/react'
import Logo from '@/components/index-page/Logo'
import RightSectionOnDesktop from '@/components/index-page/RightSectionOnDesktop'
import NoLgSearch from '@/components/index-page/NoLgSearch'
import NoLgMenuButton from '@/components/index-page/NoLgMenuButton'
import LgNavItems from '@/components/index-page/LgNavItems'
import LgSearch from '@/components/index-page/LgSearch'
import NoLgMenuPopoverContent from '@/components/index-page/NoLgMenuPopoverContent'
import Footer from '@/components/index-page/Footer'
import MainContent from '@/components/index-page/MainContent'


export default function Example() {
    return (
        <>
            {/*
                This example requires updating your template:

                ```
                <html class="h-full bg-gray-100">
                <body class="h-full">
                ```
            */}
            <div className="h-full flex-col flex">
                <Popover as="header" className="bg-indigo-600 pb-24">
                    {({ open }) => (
                        <>
                            <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                                {/* top header row (all screen) */}
                                <div className="relative flex items-center justify-center py-5 lg:justify-between">
                                    <Logo />
                                    <RightSectionOnDesktop />
                                    <NoLgSearch />
                                    <NoLgMenuButton open={open} />
                                </div>
                                {/* content index Row (No Lg) */}
                                <div className="hidden border-t border-white border-opacity-20 py-5 lg:block">
                                    <div className="grid grid-cols-3 items-center gap-8">
                                        <LgNavItems />
                                        <LgSearch />
                                    </div>
                                </div>
                            </div>
                            <NoLgMenuPopoverContent />
                        </>
                    )}
                </Popover>
                <MainContent />
                <Footer />
            </div>
        </>
    )
}
