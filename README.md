Will redirect all traffic to the target URL adding the path to the end of the target URL.

Required Environment Variables:
- `TARGET_URL`, the URL of the target website
- `PORT`, the port to run the server on. Shouldnt be needed.

- [ ] remove PORT requirement.

# Railway config:

- add a service linked to the github repo
- add source url as custom domain in the service
- add the following environment variables:
  - `TARGET_URL`, the URL of the target website
  - `PORT`, the port to run the server on. Shouldnt be needed.
- in Config-as-code set to `config/railway/web.json`
- deploy 
