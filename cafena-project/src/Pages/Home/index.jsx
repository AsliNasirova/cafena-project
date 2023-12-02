import React from 'react'
import Distinct from '../../Layout/Distinct'
import Review from '../../Layout/Review'
import NewsBlog from '../../Layout/NewsBlog'

function Home() {
    return (
        <main>
            <Distinct/>
            <Review />
            <NewsBlog />
        </main>
    )
}

export default Home