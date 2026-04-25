/* package.json
{
  "name": "pepc-website",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {"dev":"vite","build":"vite build","preview":"vite preview"},
  "dependencies": {"react":"^18.2.0","react-dom":"^18.2.0"},
  "devDependencies": {"vite":"^5.0.0","tailwindcss":"^3.4.0","postcss":"^8.4.0","autoprefixer":"^10.4.0"}
}
*/

import React from 'react';
export default function App(){return (<main className='min-h-screen bg-slate-950 text-white p-8'><div className='max-w-6xl mx-auto text-center py-20'><h1 className='text-6xl font-bold'>PEPC</h1><p className='text-2xl text-amber-400 mt-3'>Prime Elite Project Controls</p><p className='mt-4 text-xl'>Precision in Planning. Excellence in Delivery.</p><p className='mt-6 text-slate-300'>Planning, Scheduling, Project Controls, Delay Claims, Dashboards for Saudi Arabia and GCC contractors. العربية | English</p><div className='mt-8 flex gap-4 justify-center'><button className='bg-amber-500 text-black px-6 py-3 rounded-2xl font-semibold'>Get Free Consultation</button><button className='border px-6 py-3 rounded-2xl'>WhatsApp Now</button></div></div><section className='max-w-6xl mx-auto py-12'><h2 className='text-4xl font-bold mb-6 text-center'>Services</h2><div className='grid md:grid-cols-2 gap-4'>{['Baseline Schedule','Tender Programs','Recovery Schedule','Delay Analysis / EOT','Power BI Dashboards','Weekly Reports'].map(x=><div key={x} className='p-4 rounded-xl bg-slate-900 border border-slate-800'>{x}</div>)}</div></section><div className='grid md:grid-cols-3 gap-6 max-w-6xl mx-auto'>{['Starter 5,000 SAR','Professional 12,000 SAR','Elite 25,000+ SAR'].map(x=><div key={x} className='p-6 rounded-2xl bg-white text-black font-bold'>{x}</div>)}</div><section className='max-w-5xl mx-auto py-14'><h2 className='text-4xl font-bold mb-6 text-center'>Lead Form</h2><div className='grid md:grid-cols-2 gap-4'><input className='p-3 rounded-xl text-black' placeholder='Company Name'/><input className='p-3 rounded-xl text-black' placeholder='Email'/><input className='p-3 rounded-xl text-black' placeholder='Phone'/><input className='p-3 rounded-xl text-black' placeholder='Project Type'/></div><textarea className='w-full mt-4 p-3 rounded-xl text-black' placeholder='Your Requirements'></textarea><div className='text-center mt-4'><button className='bg-amber-500 text-black px-6 py-3 rounded-2xl font-semibold'>Submit</button></div></section><div className='max-w-4xl mx-auto py-16 text-center'><p>Eng. Ayman Daoud</p><p>spengr.ayman@gmail.com</p><p>+966 54 955 8125</p></div></main>)}
