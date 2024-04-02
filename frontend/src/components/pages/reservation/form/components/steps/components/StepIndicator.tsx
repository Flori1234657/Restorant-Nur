import Typography from '@mui/joy/Typography';

function StepIndicator({ stepText }: { stepText: string }) {
  return (
    <Typography
      level="body-lg"
      sx={(theme) => ({
        fontSize: {
          xs: '0.75rem',
          md: '0.625rem',
          lg: '0.6rem',
          xl: '0.569rem',
        },
        fontWeight: '500',
        lineHeight: '150%',
        color: theme.palette.primary[300],
        alignSelf: 'flex-end',
      })}
    >
      {stepText}
    </Typography>
  );
}

export default StepIndicator;
