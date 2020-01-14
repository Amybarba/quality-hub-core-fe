import React from 'react'
import { useQuery } from '@apollo/react-hooks'

import ResumeReviewEntry from '../ResumeReviewEntry'
import { DECLINED_RESUME_REVIEWS } from '../../Resolvers'


const DeclinedRequests = () => {

    const { loading, data } = useQuery(DECLINED_RESUME_REVIEWS, {
        fetchPolicy: 'network-only'
    })

    console.log(`DeclinedRequests / data`, data)

    const declinedArray = !loading && data.declinedResumeReviews.map(review => {
        return {
            ...review,
            status: "Declined"
        }
    })


    return (
        <div>
            {!loading && declinedArray.map(request => (
                <ResumeReviewEntry request={request} key={request.id} />
            ))}
        </div>
    )
}

export default DeclinedRequests
