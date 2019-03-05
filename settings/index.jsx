function settingsComponent(props) {
  return (
    <Page>
      <Section
        title={<Text bold align="center">R-moat Settings</Text>}>
        <TextInput
          settingsKey="serverUrl"
          label="Server Url"
        />
      </Section>
    </Page>
  );
}

registerSettingsPage(settingsComponent);
