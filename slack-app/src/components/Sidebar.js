import React from 'react'
import styled from 'styled-components'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline'
import {sidebarItems} from '../data/SideBarDataObject'

export default function Sidebar() {
    return (
        <Container>
            <WorkSpaceContainer>
                <Name>
                    Veronika
                </Name>

                <NewMessage>
                    <AddCircleOutlineIcon/>
                </NewMessage>
            </WorkSpaceContainer>

            <MainChannels>
                {
                    sidebarItems.map(item =>(
                        <MainChannelItem>
                            {item.icon}
                            {item.text}
                        </MainChannelItem>
                    ))
                }
            
            </MainChannels>

            <ChannelsContainers>
                <NewChannelContainer>
                    <div>
                        Channels
                    </div>
                    <AddCircleOutlineIcon/>
                </NewChannelContainer>

                <ChannelList>
                    <Channel>

                    </Channel>
                </ChannelList>
            </ChannelsContainers>
        </Container>
    )
}

const Container = styled.div`
    background: #EA9E8D;
`

const WorkSpaceContainer = styled.div`
    color: #fff;
    height: 64px;
    display: flex;
    align-items: center;
    padding-left: 19px;
    justify-content: space-between;
    border-bottom: 1px solid #fff;
`

const Name = styled.div`
    
`

const NewMessage = styled.div`
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: blue;
    fill: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
    cursor: pointer;
`

const MainChannels = styled.div`
    padding-top: 20px;
`

const MainChannelItem = styled.div`
    display: grid;
    grid-template-columns: 15% auto;
    height: 28px;
    align-items: center;
    padding-left: 19px;
    cursor: pointer;
    :hover {
        background-color: #bdb2ff;
    }
`

const ChannelsContainers = styled.div`
    color: #fff;
    margin-top: 10px;
`

const NewChannelContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-itmes: center;
    height: 28px;
    padding: 0 12px 0 19px;
`

const ChannelList = styled.div`

`

const Channel = styled.div`
    height: 28px;
    display: flex;
    align=items: center;
    margin-left: 19px;
    cursor: pointer;
    :hover {
        background-color: #bdb2ff;
    }
`