import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { Container } from './styles';

const SkeletonStore = () => {
    return (
        <>
            <Skeleton style={{
                height: "350px",
                position:"relative",
                top:"-50px",
            }} />
            <Container>
                {[...Array(8)].map((_, i) => (
                    <div key={i}>
                        <Skeleton style={{
                            width: "285px",
                            height: "350px",
                            borderRadius: "15px",
                        }} />
                        <Skeleton count={1} style={{
                            marginTop: "10px",
                            height: "50px",
                        }} />
                        <Skeleton count={1} style={{
                            marginTop: "15px",
                            height: "20px",
                        }} />
                        <Skeleton count={1} style={{
                            marginTop: "15px",
                            height: "20px",
                            marginBottom: "30px"
                        }} />
                    </div>
                ))}

            </Container>
        </>
    );
};

export default SkeletonStore;