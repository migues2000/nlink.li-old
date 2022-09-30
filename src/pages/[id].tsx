import type { GetServerSideProps, NextPage } from 'next';
import { default as PageLayout } from '@components/layout/PageLayout';
import { default as prisma } from '@lib/prisma';
import { default as SensitiveContentWarning } from '@components/SensitiveContentWarning';
import { default as LinkUnlocker } from '@components/LinkUnlocker';
import { useRouter } from 'next/router';
import { useState } from 'react';

type LinkPageProps = {
  id: string;
  isSensitive: boolean;
  hasPassword: boolean;
  link: string | null;
};

const LinkPage: NextPage<LinkPageProps> = ({
  id,
  isSensitive,
  hasPassword,
  link,
}) => {
  const [sensitiveConcernAccepted, setSensitiveConcernAccepted] = useState(
    !isSensitive
  );

  const router = useRouter();
  return (
    <PageLayout title='Link Shortener'>
      {isSensitive && sensitiveConcernAccepted === false && (
        <SensitiveContentWarning
          onConcern={() =>
            link ? router.push(link) : setSensitiveConcernAccepted(true)
          }
        />
      )}
      {hasPassword && sensitiveConcernAccepted && <LinkUnlocker id={id} />}
    </PageLayout>
  );
};

export const getServerSideProps: GetServerSideProps<LinkPageProps> = async ({
  query,
}) => {
  const shortenedLink = await prisma.shortenedLink.findUnique({
    where: { id: query.id as string },
  });
  if (!shortenedLink) return { notFound: true };

  if (shortenedLink.password === null && shortenedLink.isSensitive === false)
    return { redirect: { permanent: false, destination: shortenedLink.link } };

  return {
    props: {
      id: shortenedLink.id,
      link: shortenedLink.password ? null : shortenedLink.link,
      isSensitive: shortenedLink.isSensitive,
      hasPassword: !!shortenedLink.password,
    },
  };
};

export default LinkPage;
