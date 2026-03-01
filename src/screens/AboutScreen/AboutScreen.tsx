import React from 'react';
import { Divider, HStack, VStack } from '@gluestack-ui/themed-native-base';
import { Trans } from '@lingui/macro';
import { ScrollView } from 'react-native';
import generic from 'assets/styles/generic';
import styles from 'assets/styles/variables';
import LinkText from 'components/UI/CustomText/LinkText';
import MediumText from 'components/UI/CustomText/MediumText';

function AboutScreen() {
    return (
        <ScrollView style={{ ...generic.wrap, paddingLeft: styles.padding.md }}>
            <VStack space={3} divider={<Divider />} w="100%">
                <HStack style={{ flexDirection: 'column' }}>
                    <MediumText>
                        <Trans>
                            ePortfolios Mobile is an open source project by Academe Research, Inc.
                            To contribute or report bugs, see our
                        </Trans>
                        <LinkText
                            url="https://github.com/eportfolios/eportfolios-mobile/"
                            text="ePortfolios Mobile"
                        />
                        <MediumText text="repository on GitHub." />
                    </MediumText>
                </HStack>
                <HStack>
                    <MediumText>
                        <Trans>
                            ePortfolios Mobile allows you to connect your mobile device to your
                            ePortfolios site. You can create and collect your content on your mobile
                            device and use the app to upload it to your site. You can upload any
                            files that your device allows you to upload and create journal entries.
                        </Trans>
                    </MediumText>
                </HStack>
                <HStack>
                    <MediumText>
                        <Trans>
                            ePortfolios is an open source ePortfolio and competency assessment
                            platform designed for reflecting on what you have learned and for
                            supporting social learning. An ePortfolio is a tool and method to record
                            your evidence of learning, e.g. essays, artwork, and certificates, and
                            reflect on them to learn from your experiences. You can also engage in
                            conversations with others and create group portfolios.
                        </Trans>
                    </MediumText>
                </HStack>
                <HStack>
                    <MediumText>
                        <Trans>
                            ePortfolios Mobile allows you to collect your evidence on your mobile
                            device, including when you are offline. You can then upload your photos,
                            videos, journal entries, etc. to your ePortfolios site and add them to
                            your portfolios.
                            <MediumText>
                                <Trans />
                            </MediumText>
                        </Trans>
                    </MediumText>
                </HStack>
                <HStack>
                    <MediumText>
                        <Trans>
                            In order to push content to your site from ePortfolios Mobile, you
                            require an account on an ePortfolios site that allows mobile uploads.
                            Typically, the institution that you are affiliated with will make a site
                            available to you to use if you are working with portfolios.
                        </Trans>
                    </MediumText>
                </HStack>
            </VStack>
        </ScrollView>
    );
}

export default AboutScreen;
