import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { Container } from './styles';

const SkeletonProductPage = () => {
    return (
        <Container>
            <div>
                <Skeleton style={{
                    height: "511px",
                }} />
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr 1fr",
                    gap: "20px",
                    marginTop: "30px",
                }}>
                    <Skeleton style={{
                        width: "187px",
                        height: "140px",
                    }} />
                    <Skeleton style={{
                        width: "187px",
                        height: "140px",
                    }} />
                    <Skeleton style={{
                        width: "187px",
                        height: "140px",
                    }} />
                </div>
            </div>
            <div>
                <Skeleton style={{
                    marginLeft: "60px",
                    height: "50px"
                }} />

                <Skeleton style={{
                    marginLeft: "60px",
                    width: "105px",
                    height: "33px",
                    marginTop: "15px",
                }} />

                <Skeleton style={{
                    marginLeft: "60px",
                    width: "155px",
                    height: "33px",
                    marginTop: "20px",
                }} />

                <Skeleton style={{
                    marginLeft: "60px",
                    width: "195px",
                    height: "90px",
                    marginTop: "20px",
                }} />

                <Skeleton style={{
                    marginLeft: "60px",
                    height: "90px",
                    marginTop: "20px",
                }} />
            </div>
        </Container>
    );
};

export default SkeletonProductPage;