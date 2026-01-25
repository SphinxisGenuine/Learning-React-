function ChildrenProp(){
//passing cchildren is bertter than props 
return <>      
<Card>N ame-- Sphinx</Card>
<Card>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis sequi ipsa, sed in odio asperiores, minima sunt pariatur repudiandae aut reiciendis! Dolorem veniam provident velit dolor molestias cupiditate, odit amet debitis, corrupti animi id eos ad, assumenda dolorum delectus doloribus. Aut maiores fugiat similique quia totam non eum, omnis quidem ducimus corporis amet dolorem, pariatur eaque eius consequatur, dolor ut vitae harum inventore! Obcaecati soluta dolore aut. Earum ipsam, commodi voluptatem voluptas laborum ratione, repellat architecto totam ipsum saepe libero quas quasi excepturi vitae nam soluta, ut vel dolore aspernatur. Consectetur distinctio eius voluptas placeat dolores, accusantium beatae quaerat dolore libero atque impedit in cumque perspiciatis animi culpa harum consequuntur, voluptate dolor voluptatum ea nam officiis explicabo necessitatibus. Perferendis tempore, non at laborum aspernatur nemo, a maxime tempora quos earum aliquid cumque quasi repellendus quisquam minima hic laboriosam nostrum illo odio eaque voluptates? Molestias suscipit repellat ut dolore at? Ullam?</Card>

<Card>
<div>
    <li>GO To Gym</li>
    <li>take food </li>
    <li>study</li>
     </div></Card>
</>
}
function Card({children}){
    return <div style={{backgroundColor:"#7dd3fc",borderRadius:10,margin:10,padding:30,color:"#0c4a6e" }}>
    {children}
    </div>
}


