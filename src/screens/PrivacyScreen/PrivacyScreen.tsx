import React from 'react';
import { Box, Divider, HStack, VStack } from '@gluestack-ui/themed-native-base';
import { Trans, t } from '@lingui/macro';
import { ScrollView } from 'react-native';
import generic from 'assets/styles/generic';
import styles from 'assets/styles/variables';
import LinkText from 'components/UI/CustomText/LinkText';
import MediumText from 'components/UI/CustomText/MediumText';
import SubHeading from 'components/UI/SubHeading/SubHeading';
import SubHeadingNoColon from 'components/UI/SubHeadingNoColon/SubHeadingNoColon';

function PrivacyScreen() {
    return (
        <ScrollView style={{ ...generic.wrap, paddingLeft: styles.padding.md }}>
            <VStack space={3} divider={<Divider />} w="100%">
                <HStack>
                    <Box>
                        <SubHeadingNoColon text={t`Introduction`} />
                        <MediumText>
                            <Trans>
                                We are committed to protecting your privacy and providing you with a
                                safe mobile app to connect to your ePortfolios site. This Statement
                                of Privacy applies to the mobile app &apos;ePortfolios
                                Mobile&apos; as provided by Academe Research, Inc. and governs data
                                collection and usage.
                            </Trans>
                        </MediumText>
                        <MediumText>
                            <Trans>
                                By using the full potential of the application, you will need to log
                                into the ePortfolios site that you are using for your portfolio
                                work. The login form for internal or LDAP accounts sits in the
                                mobile app, whereas single sign-on takes you to your site. You may
                                also generate an access token manually on your ePortfolios site if
                                that feature is enabled.
                            </Trans>
                        </MediumText>
                        <MediumText>
                            <Trans>
                                Your own name is displayed in the app once you are logged in, and
                                you are connected to your ePortfolios account via an access token
                                that is stored in the app as well as on the server so the two can
                                communicate with each other.
                            </Trans>
                        </MediumText>
                    </Box>
                </HStack>

                <HStack>
                    <Box>
                        <SubHeadingNoColon text={t`How we use your personal information`} />
                        <MediumText>
                            <Trans>
                                Neither the ePortfolios project nor Academe Research, Inc. have
                                access to any of the data that you enter on ePortfolios Mobile nor
                                access to any data analytics. The institution that hosts the
                                ePortfolios site to which you connect cannot access data in your
                                ePortfolios Mobile app either. The institution will have a certain
                                amount of access to data that you upload to the institution&apos;s
                                site via ePortfolios Mobile. Please refer to the privacy statement
                                on the ePortfolios site that you are using for more information.
                            </Trans>
                        </MediumText>
                    </Box>
                </HStack>

                <HStack>
                    <Box>
                        <SubHeadingNoColon
                            text={t`Storage and security of your personal information`}
                        />
                        <MediumText>
                            <Trans>
                                We will take all reasonable steps to ensure that the connection
                                between ePortfolios Mobile and the site you connect to is secure
                                from the app perspective and that your access information is not
                                disclosed. Neither the ePortfolios project nor Academe Research,
                                Inc. are responsible though for maintaining the site that you
                                connect to or keeping your installation of ePortfolios Mobile up to
                                date on your mobile device. It is the responsibility of the
                                organisation providing the ePortfolios service to keep the site and
                                its content secure. In order to help protect your personal
                                information, please do not disclose your username, password, or
                                access token to anybody or allow them to view content you are
                                planning to upload to your site via ePortfolios Mobile.
                            </Trans>
                        </MediumText>
                    </Box>
                </HStack>

                <HStack>
                    <Box>
                        <SubHeadingNoColon text={t`Deleting your data`} />
                        <MediumText>
                            <Trans>
                                Once you have uploaded data to your ePortfolios account, it is no
                                longer stored in the app. Log into your account on the ePortfolios
                                website you use to manage or delete uploaded data there. When you
                                log out of ePortfolios Mobile, all content you created in the app
                                will be deleted. This cannot be undone. Only files that already
                                existed on your device before you added them to your ePortfolios
                                Mobile queue for uploading to your ePortfolios account will still be
                                available on your device unless you deleted them yourself.
                            </Trans>
                        </MediumText>
                    </Box>
                </HStack>

                <HStack>
                    <Box>
                        <SubHeadingNoColon text={t`Changes to this Privacy Statement`} />
                        <MediumText>
                            <Trans>
                                We may occasionally make adjustments to our Privacy Statement to
                                reflect changes to the system and in response to feedback. As such,
                                we suggest you check the Privacy Statement each time you visit this
                                app.
                            </Trans>
                        </MediumText>
                    </Box>
                </HStack>

                <HStack>
                    <Box>
                        <SubHeadingNoColon text={t`Contact`} />
                        <MediumText>
                            <MediumText>
                                <Trans>
                                    If you have any questions regarding this Statement, please
                                </Trans>
                            </MediumText>
                            <LinkText url="mailto:privacy@eportfolios.in" text={t`contact us.`} />
                        </MediumText>
                    </Box>
                </HStack>
            </VStack>
        </ScrollView>
    );
}

export default PrivacyScreen;
