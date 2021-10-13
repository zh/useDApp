import React from 'react'
import { formatEther } from '@ethersproject/units'
import { ChainId, getCoinName, getChainName, useEtherBalance, useEthers } from '@usedapp/core'
import { Container, ContentBlock, ContentRow, MainContent, Section, SectionRow } from '../components/base/base'
import { Label } from '../typography/Label'
import { TextInline } from '../typography/Text'
import { Title } from '../typography/Title'

import { AccountButton } from '../components/account/AccountButton'

export function Balance() {
  const { chainId, account } = useEthers()
  const userBalance = useEtherBalance(account)
  const chainName = getChainName(chainId || ChainId.Mainnet)
  const coinName = getCoinName(chainId || ChainId.Mainnet)

  return (
    <MainContent>
      <Container>
        <Section>
          <SectionRow>
            <Title>Balance</Title>
            <AccountButton />
          </SectionRow>
          <ContentBlock>
            {chainId && (
              <ContentRow>
                <Label>Chain:</Label>{' '}
                <TextInline>
                  {chainName} [{chainId}]
                </TextInline>
              </ContentRow>
            )}
            {account && (
              <ContentRow>
                <Label>Account:</Label> <TextInline>{account}</TextInline>
              </ContentRow>
            )}
            {userBalance && (
              <ContentRow>
                <Label>Balance:</Label> <TextInline>{formatEther(userBalance)}</TextInline> <Label>{coinName}</Label>
              </ContentRow>
            )}
          </ContentBlock>
        </Section>
      </Container>
    </MainContent>
  )
}
