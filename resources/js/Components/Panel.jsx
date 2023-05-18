import React from 'react'
function Panel({ children }) {
    return (
        <div className='rounded-lg h-32 flex items-start justify-around bg-secondary text-white'>
            {children}
        </div>
    )
}

function Icon({ icon }) {
    return (
        <div className='bg-primary text-primary h-full w-1/4'>
            {icon}
        </div>
    )
}

function Body({ body }) {
    return (
        <div className="flex flex-col text-red-500 border bg-white w-3/4">
            {body}
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem, similique! Laborum placeat amet modi voluptatem fugiat aperiam eos dolores eum vitae id laboriosam, et, a suscipit. Dicta incidunt molestiae voluptate debitis repellat expedita quas a eveniet possimus accusantium delectus, ullam quia. Quidem consequuntur adipisci veniam maxime placeat suscipit odio architecto iusto aperiam, atque itaque saepe reiciendis quisquam quis officiis, cumque fugit est veritatis perferendis, non aspernatur! Earum voluptas officiis tempore quia, itaque voluptatem nisi dolores neque dicta reprehenderit modi iste atque facere! Incidunt corrupti doloremque consequuntur minima ipsam ut nihil, sint vel sequi saepe nam est autem repudiandae, qui mollitia!</p>
        </div>
    )
}

Panel.Icon = Icon;
Panel.Body = Body;
export default Panel;
