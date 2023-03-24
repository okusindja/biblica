import React from 'react';
import { Container } from './styles'
import ContentLoader, { Rect, Circle, Path } from "react-content-loader/native"

interface Props {
    props?: any;
    form: 'banner-post' | 'banner-text' | 'posts' | 'text'
}

const Skeleton = ({props, form}: Props) => {
  return (
    <Container>
        { form === 'banner-post' ? 
        <ContentLoader 
        speed={0.5}
        width={'100%'}
        height={450}
        viewBox="0 0 400 460"
        backgroundColor="#ececec"
        foregroundColor="#f5f5f5"
        {...props}
    >
        <Rect x="0" y="0" rx="2" ry="2" width="400" height="180" /> 
        <Rect x="3" y="197" rx="0" ry="0" width="63" height="61" /> 
        <Rect x="77" y="199" rx="0" ry="0" width="260" height="14" /> 
        <Rect x="77" y="230" rx="0" ry="0" width="260" height="14" /> 
        <Rect x="3" y="278" rx="0" ry="0" width="63" height="61" /> 
        <Rect x="367" y="199" rx="0" ry="0" width="23" height="14" /> 
        <Rect x="367" y="230" rx="0" ry="0" width="23" height="14" /> 
        <Rect x="77" y="279" rx="0" ry="0" width="260" height="14" /> 
        <Rect x="77" y="310" rx="0" ry="0" width="260" height="14" /> 
        <Rect x="3" y="360" rx="0" ry="0" width="63" height="61" />
        <Rect x="367" y="279" rx="0" ry="0" width="23" height="14" /> 
        <Rect x="367" y="310" rx="0" ry="0" width="23" height="14" /> 
        <Rect x="77" y="361" rx="0" ry="0" width="260" height="14" /> 
        <Rect x="77" y="392" rx="0" ry="0" width="260" height="14" /> 
        <Rect x="367" y="361" rx="0" ry="0" width="23" height="14" /> 
        <Rect x="367" y="392" rx="0" ry="0" width="23" height="14" />
        </ContentLoader> : 
        form === 'banner-text' ? 
        <ContentLoader 
        speed={0.5}
        width={'100%'}
        height={450}
        viewBox="0 0 400 460"
        backgroundColor="#ececec"
        foregroundColor="#f5f5f5"
        {...props}
    >
        <Rect x="0" y="0" rx="2" ry="2" width="400" height="180" /> 
        <Rect x="0" y="200" rx="0" ry="0" width="398" height="14" /> 
        <Rect x="0" y="239" rx="0" ry="0" width="398" height="14" /> 
        <Rect x="0" y="279" rx="0" ry="0" width="398" height="14" /> 
        <Rect x="0" y="320" rx="0" ry="0" width="398" height="14" /> 
        <Rect x="0" y="359" rx="0" ry="0" width="398" height="14" /> 
        <Rect x="0" y="400" rx="0" ry="0" width="398" height="14" /> 
        <Rect x="0" y="440" rx="0" ry="0" width="398" height="14" />
        </ContentLoader> : 
        form === 'posts' ? 
        <ContentLoader 
        speed={0.5}
        width={'100%'}
        height={450}
        viewBox="0 0 400 460"
        backgroundColor="#ececec"
        foregroundColor="#f5f5f5"
        {...props}
    >
        <Rect x="0" y="0" rx="0" ry="0" width="63" height="61" /> 
        <Rect x="74" y="2" rx="0" ry="0" width="260" height="14" /> 
        <Rect x="74" y="33" rx="0" ry="0" width="260" height="14" /> 
        <Rect x="0" y="81" rx="0" ry="0" width="63" height="61" /> 
        <Rect x="364" y="2" rx="0" ry="0" width="23" height="14" /> 
        <Rect x="364" y="33" rx="0" ry="0" width="23" height="14" /> 
        <Rect x="74" y="82" rx="0" ry="0" width="260" height="14" /> 
        <Rect x="74" y="113" rx="0" ry="0" width="260" height="14" /> 
        <Rect x="0" y="163" rx="0" ry="0" width="63" height="61" /> 
        <Rect x="364" y="82" rx="0" ry="0" width="23" height="14" /> 
        <Rect x="364" y="113" rx="0" ry="0" width="23" height="14" /> 
        <Rect x="74" y="164" rx="0" ry="0" width="260" height="14" /> 
        <Rect x="74" y="195" rx="0" ry="0" width="260" height="14" /> 
        <Rect x="364" y="164" rx="0" ry="0" width="23" height="14" /> 
        <Rect x="364" y="195" rx="0" ry="0" width="23" height="14" /> 
        <Rect x="0" y="245" rx="0" ry="0" width="63" height="61" /> 
        <Rect x="74" y="246" rx="0" ry="0" width="260" height="14" /> 
        <Rect x="74" y="277" rx="0" ry="0" width="260" height="14" /> 
        <Rect x="0" y="327" rx="0" ry="0" width="63" height="61" /> 
        <Rect x="364" y="246" rx="0" ry="0" width="23" height="14" /> 
        <Rect x="364" y="277" rx="0" ry="0" width="23" height="14" /> 
        <Rect x="74" y="328" rx="0" ry="0" width="260" height="14" /> 
        <Rect x="74" y="359" rx="0" ry="0" width="260" height="14" /> 
        <Rect x="364" y="328" rx="0" ry="0" width="23" height="14" /> 
        <Rect x="364" y="359" rx="0" ry="0" width="23" height="14" />
        </ContentLoader> : 
        form === 'text' ? 
        <ContentLoader 
        speed={0.5}
        width={'100%'}
        height={450}
        viewBox="0 0 400 460"
        backgroundColor="#ececec"
        foregroundColor="#f5f5f5"
        {...props}
    >
        <Rect x="0" y="0" rx="3" ry="3" width="78" height="14" /> 
        <Rect x="89" y="0" rx="3" ry="3" width="164" height="14" /> 
        <Rect x="149" y="48" rx="3" ry="3" width="62" height="14" /> 
        <Rect x="219" y="48" rx="3" ry="3" width="84" height="14" /> 
        <Rect x="21" y="48" rx="3" ry="3" width="117" height="14" /> 
        <Rect x="0" y="71" rx="3" ry="3" width="43" height="14" /> 
        <Rect x="21" y="23" rx="3" ry="3" width="164" height="14" /> 
        <Rect x="194" y="23" rx="3" ry="3" width="202" height="14" /> 
        <Rect x="264" y="0" rx="3" ry="3" width="84" height="14" /> 
        <Rect x="57" y="71" rx="3" ry="3" width="164" height="14" />
        </ContentLoader> : ''
        } 
    </Container>
  );
};

export default Skeleton;