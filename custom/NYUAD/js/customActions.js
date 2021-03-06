export default {
  name: 'customActions',
  template: `
          <custom-action name="feedback"
                label="Feedback"
                index=3
                icon="ic_forum_24px"
                icon-set="communication"
                link="https://nyu.qualtrics.com/jfe/form/SV_blQ3OFOew9vl6Pb?Source=NYUAD" />
          <custom-action name="export_endnote"
                label="EndNote"
                index=4
                icon="ic_description_24px"
                icon-set="action"
                link="https://cite.library.nyu.edu/{pnx.search.recordid[0]}?calling_system=primo&institution=NYUAD&cite_to=endnote" />
          <custom-action name="export_refworks"
                  label="RefWorks"
                  index=5
                  icon="ic_description_24px"
                  icon-set="action"
                  link="https://cite.library.nyu.edu/{pnx.search.recordid[0]}?calling_system=primo&institution=NYUAD&cite_to=refworks" />
          <custom-action name="download_ris"
                  label="RIS"
                  index=6
                  icon="ic_file_download_24px"
                  icon-set="file"
                  link="https://cite.library.nyu.edu/{pnx.search.recordid[0]}?calling_system=primo&institution=NYUAD&cite_to=ris" />
          <custom-action name="download_bibtex"
                  label="BibTeX"
                  index=7
                  icon="ic_file_download_24px"
                  icon-set="file"
                  link="https://cite.library.nyu.edu/{pnx.search.recordid[0]}?calling_system=primo&institution=NYUAD&cite_to=bibtex" />
              `
};
