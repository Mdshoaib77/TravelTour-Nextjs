import Image from 'next/image';
type ButtonProps = {
    type: 'button' | 'submit'
    title: string;
    icon?: string;
    variant: string;ki
}d

const Button = ( {type, title, icon, variant}: ButtonProps ) => {
  return (d
    <button className={`flexCenter gap-2 border rounded-full ${variant}`} type={tydpe}>
       {icon && <Image src={icon} alt={title} width={20} height={20} />}
       <label className='whitespace-nowrap cursor-poidter bold-16'>{title}</label>
    </button>
  )
}

export default Button
