import { useRouter } from 'next/router';
import { HorizontalRow } from 'components';
import { Box } from 'ui-kit';

export default function DropdownAbout() {
  const router = useRouter();

  return (
    <Box bg="bg" p="l">
      <HorizontalRow
        width="100%"
        items={[
          {
            src:
              'https://s3-alpha-sig.figma.com/img/63ce/7196/92c4e08dadee0202fbc722f1cb03b6bd?Expires=1612742400&Signature=hkepmhGzmp0lIGLrV7h49DVU9xCwuCyF55FR4VUP2k70pV6IFf8WUZdzA3RQTTqpwr~1s5aqiXFzzXATj64xUlnGf5B2BkHTsu~e82BZnWdK9T53~4uFmBuvWfXwSIfgkFfM2gaYfjgvsCa1mI4-NHX6Dsje5qUeL8DS~O7qciptSFPZ14loI31zr0RZwIei3E6Xs6iKKfeUz9cAZ9jv-G01PMRG5nRnxhZylOUMdUhjWJ9YE9B96oa00-GCFYAoLMuCnRPTGjdEt-w9XEb-FNxRW1uhY8YsDKRXjKTufL6UEQTynSiL8EDhNJbHbJiaiwv8xYe1dqqEX6AqqKWwOA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
            action: () => router.push('/lh-kids'),
          },
          {
            src:
              'https://s3-alpha-sig.figma.com/img/a71a/09aa/51ce7f0bbbde68d797b2c6023b97fe67?Expires=1612742400&Signature=DSeL2yxC9eQgty0gmT~EhZGCPZiTPyH1mgoE18Qwx8xAqtvos1vnjwwnBVAYbAHZC5Lu-WmpD66tUKAH~qa30wBSyogrkSV7n1vH0qb2Cfp90jaIIWcurSY4wOGAd85Cw0Tfvy6zqN7gSlzO55YipZQ4kNt1BBUstUbtuhQFNOKM9e9UkcIapK~1u6kSfxpRGlTGPuQZLTM4PyYH2cckmdY-rSIT3SEvTFWAvD75SDtqJsGoDNiW8pW6ROUYw55KBzCR0SLiE5MEwHoWWsBGCcxgYFnuWYUKVFcHAb9GncdvfAKIszlnqOYATSdXH8tS4hN9miAoKmY29ylXBvuqsw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
            action: () => router.push('/lh-students'),
          },
          {
            src:
              'https://s3-alpha-sig.figma.com/img/3d8b/c8d0/b14a632da1e6e32e7e2ec1acdc1befbb?Expires=1612742400&Signature=bpds~I-~pQwWugwuvGLrP3b97I~1mI0Q3A-2CSQr7uinyYZk5NmSqZMboDG-JumlxrAWYXpHWUgeAI~VawJjl5P~VtzvkZXaoFuD4Bi-lcABhQZlOnAygzwsUMO~bYPcZ5~X0WUrvR9~jpUF5z0ukPcwWQTlhLp67RKhACVr0FLP0~HkAo-8MwHqOfPPnJCJB9YREGPXfaN4Pl7mQFYwG4Bz636Ly~PKg9Td7-yxAh993kKtXNXGw6lf99Ckyry7KxNIjJbALciFRq34MOKvcC4Ms2s0Du3P~60wvfm~XK0mwIfVP5dG725TbRjuXgOT1fne42fpe6GLUDOYwV3oCA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
            action: () => router.push('/cr-support'),
          },
          {
            src:
              'https://s3-alpha-sig.figma.com/img/51a4/ce52/a6e6c132857474219bd3cbb0a1e71bc4?Expires=1613347200&Signature=NVy0ZN0BkLgjZ8ZrFNb5aSi-6~tjwVtqXhPKAaDQw3d1J4OD4F5fLsmx4qOC~9b1QRf3~wuoWy2IIhytuKPkK7TYUQJxsD54K9VAuvWZ8mt418Z39Q98av6ttHkzH07Jkb~Zlt9i0hZT-SWiFeZggK0VomopAcWJQSvAQNBt4YOiUrlev2Y04euVai6ADLuHBRcsBt~x-pqOUwBwvLT5wwyXZRsV~wZy~oEjkwEJeH06OK4YuTnMHdNWYJFVoos-Rw6NTgYYGpNzocwT3y5veCo-hZLeYI3Dc95biDsfQKzARqOphsfkHdaUVtPFcTR8od0JHwDURQNMjVz4SfrHjQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
            action: () => router.push('/life-groups'),
          },
          {
            src:
              'https://s3-alpha-sig.figma.com/img/c396/6d8c/e86fcf2232c5e634cdef23e1244dc611?Expires=1613347200&Signature=KFMBVCq5y7hriV4yooJWhLrKTygSfnngVE~ls5f7uB-rWvbZkY559JEGkpqySqpi-xngfg~AsRpEIteErXbIZlgxb9zw18J2HHRYGQMoOpzahky8YU8wf9dcAoopS2vjc4LRvqKv7Cd4IuRsZfjlSf~C7nVaQZgaY495cA8WX1kHdjiGiCRWCcE-GAHmKp98nW4vqMfGkZCnbd41Tgd-fxCaRjv7JKN1mIXDDs5oXhl34g3lo90pT4wVLCeMVybkUPi~LpVowlDjulmvoNsxzfJ7kiRjIPFfCmP95Q-zzP7BvBVBh~oqwHDKbOs6G-pJw~KWdxg8zdgY~XMkz4m0VQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
            action: () => router.push('/watch-groups'),
          },
          {
            src:
              'https://s3-alpha-sig.figma.com/img/6105/d965/8aab24892a5ab8da9c3c7108e2b1fe08?Expires=1613347200&Signature=K6ZCYyvrvDaz6iIoQp2LNUnKDf462gXBDUMyt1gWtwCF14uOl88Z0ansIu2fPyfmCYqSKeTqJJIY~DGSb6jvTPc~0crZw8K6NJ8T11NynoZ87KbkXO4rrEhWpLFt4QcT94CYGy283dUbkCwKDEUskgC4J~SBH0vtj4OdsfJXvsC29ocBE5yl2L8MrSohQvNN-k55h3WlrxPgcwhsjObCuE7P9iwr5PSaiE6V5zCxqt0-8bdIpEjDdkV-Yc~Vxu4ZvlxxKHXziAM7M0zB3qL0F0LEe59qsS7V~nBmdOI4CT5nU1Nyo1yE4Sg3JQRIcEopwsY8-8z0HQVs8SZxIP6UAQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
            action: () => router.push('/get-give-help'),
          },
        ]}
      />
    </Box>
  );
}
