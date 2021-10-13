import React from 'react'
import { ChainId, getCoinName, useEthers } from '@usedapp/core'
import { AccountButton } from '../components/account/AccountButton'
import { Container, MainContent, Section, SectionRow } from '../components/base/base'
import { SendEthForm } from '../components/SendEthForm/SendEthForm'
import { Title } from '../typography/Title'

export const SendEtherPage = () => {
  const { chainId } = useEthers()
  const coinName = getCoinName(chainId || ChainId.Mainnet)

  return (
    <MainContent>
      <Container>
        <Section>
          <SectionRow>
            <Title>Send {coinName}</Title>
            <AccountButton />
          </SectionRow>
          <SendEthForm />
        </Section>
      </Container>
    </MainContent>
  )
}
