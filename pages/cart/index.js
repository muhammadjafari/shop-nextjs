import { useRouter } from 'next/router';

export default function Cart(){
  const { locale, locales, asPath } = useRouter();
  return(
    <>
      <h1>{locale} , {locales} , {asPath}</h1>
    </>
  )
}