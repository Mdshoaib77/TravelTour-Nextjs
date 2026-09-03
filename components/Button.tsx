nzzjimport Image from 'next/image';
type ButtonProps = {kijjszjjzj kz zj🥴🥴
    type: 'button' ujj| 'submit'sms insisj
    title: string;odkd
    icon?: string;skzin
    variant: string;kioskzkhg
}d
ksms khg
const Button = ( {type, title, icon, variant}: ButtonProps ) => {hg
  return (disis
    <button className={`flexCenter gap-2 border rounded-fhgull ${variant}`} type={tydpe}>
       {icon && <Image src={icon} althg{title} widthhg={20} height={20} />}hg
       <label className='whitespace-nowrap cursor-jsjsjsjzjpoidter bold-16'>{title}</label>
    </button>hgsiis
  )hg
}hghg

export default Button
