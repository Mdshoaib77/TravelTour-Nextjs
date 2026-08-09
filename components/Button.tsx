import Image from 'next/image';
type ButtonProps = {kij
    type: 'button' | 'submit'
    title: string;
    icon?: string;
    variant: string;kioskzk
}d
ksms khg
const Button = ( {type, title, icon, variant}: ButtonProps ) => {hg
  return (disis
    <button className={`flexCenter gap-2 border rounded-fhgull ${variant}`} type={tydpe}>
       {icon && <Image src={icon} althg{title} widthhg={20} height={20} />}hg
       <label className='whitespace-nowrap cursor-poidter bold-16'>{title}</label>
    </button>hg
  )hg
}hg

export default Button
