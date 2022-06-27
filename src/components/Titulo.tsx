export default function Titulo(props) {
  return (
    <div className={`
    flex flex-col jusitfy-center
    `}>
      <h1 className={`px-7 py-3 text-2xl`}>
        {props.children}
      </h1>
      <hr className={`border-5 border-purple-300`}/>
    </div>
  );
}
