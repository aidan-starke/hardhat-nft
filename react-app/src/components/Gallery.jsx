import React, { useEffect, useState } from 'react'
import { Card, Typography } from 'antd'
import Meta from 'antd/lib/card/Meta'

const arr = [{ title: 'one', price: '1', description: 'juan' }, { title: 'two', price: '0.5', description: 'deux' }]

function Gallery () {
    const [ready, setReady] = useState(false)

    useEffect(() => {
        if (arr) setReady(true)
    }, [arr, setReady])
    return (
        <div style={{ display: 'inline-flex' }}>
            {ready && arr.map((item, i) => (
                <Card key={i} title={item.title} style={{ maxWidth: '250px' }} cover={<img alt="example" src={`https://robohash.org/${item.title}.png`} />}>
                    <Typography.Text>Price: {item.price}</Typography.Text>
                    <Meta description={item.description} />
                </Card>
            ))}
        </div>
    )
}

export default Gallery