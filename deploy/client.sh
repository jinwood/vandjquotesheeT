#Build and deploy client to digital ocean droplet
cd ../client
sudo npm i
sudo npm run build
if [ ! -d "$dist" ]; then
  echo "/dist not found. Exiting."
  fi
scp -r dist/ zyfygi@159.65.27.79:~/vandjquotesheet/client/
