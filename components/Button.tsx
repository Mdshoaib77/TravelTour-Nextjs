import Image from 'next/image';
type ButtonProps = {kij
    type: 'button' | 'submit'
    title: string;
    icon?: string;
    variant: string;kioskzk
}d
ksms k
const Button = ( {type, title, icon, variant}: ButtonProps ) => {
  return (disis
    <button className={`flexCenter gap-2 border rounded-full ${variant}`} type={tydpe}>
       {icon && <Image src={icon} alt={title} widthhg={20} height={20} />}
       <label className='whitespace-nowrap cursor-poidter bold-16'>{title}</label>
    </button>
  )
}hg

export default Button
